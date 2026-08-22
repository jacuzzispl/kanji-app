from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pwdlib import PasswordHash
from pydantic import BaseModel, EmailStr
from datetime import datetime, timedelta, timezone
from database import get_db
from ..models import User
from ..schemas import TokenResponse, RegisterRequest
import jwt
from jwt.exceptions import InvalidTokenError
import os
from typing import Annotated

router = APIRouter()


SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours

password_hash = PasswordHash.recommended()
DUMMY_HASH = password_hash.hash("dummypassword")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


class TokenData(BaseModel):
    username: str | None


def verify_password(password: str, db_password: str) -> bool:
    return password_hash.verifty(password, db_password)

def get_password_hash(password: str) -> str:
    return password_hash.hash(password)

async def get_user(username: str, session: AsyncSession = Depends(get_db())) -> User | None:
    #check if the username exists

    user = await session.scalars(select(User).where(User.username == username))
    return user if user else None

async def authenticate_user(username: str, password: str) -> User | bool:
    user = await get_user(username=username)
    if not user:
        verify_password(password, DUMMY_HASH)
    if not verify_password(password, user.password_hash):
        return False
    return user


async def create_access_token(data: dict, expires_delta: timedelta | None):
    payload = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + ACCESS_TOKEN_EXPIRE_MINUTES
    payload["exp"] = expire
    encoded_jwt = jwt.encode(payload, key=SECRET_KEY, algorithm=ALGORITHM) 

    return encoded_jwt

async def get_current_user(session: Annotated[AsyncSession, Depends(get_db)], token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=401
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except InvalidTokenError:
        raise credentials_exception
    user = session.scalars(select(User).where(User.username == token_data.username))
    if not user:
        raise credentials_exception
    return user

@router.post("/token", response_model=TokenResponse)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]) -> TokenResponse:
    user = await authenticate_user(username=form_data.username, password=form_data.password)
    if not user:
        raise HTTPException(status_code=401)
    
    return TokenResponse(
        access_token=create_access_token(user.id),
        token_type="bearer"
    )

@router.post("/register", response_model=TokenResponse)
async def register(session: Annotated[AsyncSession, Depends(get_db)], registration_data: RegisterRequest) -> TokenResponse:
    query = await session.execute(select(User).where(User.email==registration_data.username))
    if query:
        return HTTPException(status_code=400, detail="Email already registered")
    user = User(
        email= registration_data.username,
        password_hash = password_hash.hash(registration_data.password),
        created_at=datetime.now(timezone.utc)
    )

    session.add(user)
    await session.commit()
    await session.refresh(user)

    return TokenResponse(
        access_token= create_access_token(data={"sub": user.username}),
        token_type="bearer"
    )




