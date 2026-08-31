from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database import get_db
from typing import Annotated
from ..models import User, UserKanji
import jwt
from jwt.exceptions import InvalidTokenError
import os

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer()
SECRET_KEY = os.getenv("SECRET_KEY")

@router.get("/study")
async def get_study_kanji(session: Annotated[AsyncSession, Depends(get_db)], token: str = Depends(oauth2_scheme)):
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        username = payload["sub"]
        if username is None:
            return HTTPException(status_code=401, detail="Could not find user")
    except :
        return HTTPException(status_code=401)
    

    kanji_to_study = session.execute(select(UserKanji).where(UserKanji.us== username))


