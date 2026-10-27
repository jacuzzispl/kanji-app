from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database import get_db
from typing import Annotated, List
from ..models import UserKanjiEntry, Kanji
import jwt
from jwt.exceptions import InvalidTokenError
import os

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = os.getenv("SECRET_KEY")

@router.get("/study")
async def get_study_kanji(session: Annotated[AsyncSession, Depends(get_db)],
                           token = Depends(oauth2_scheme)):
    
    print(jwt.decode(token, SECRET_KEY, algorithms=["HS256"]))
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        user_id = payload["sub"]
        if user_id is None:
            return HTTPException(status_code=401, detail="Could not find user")
    except:
        raise HTTPException(status_code=401)
    

    kanji_to_study = await session.execute(select(UserKanjiEntry).where(UserKanjiEntry.status == "Not Learned",
                                                                        UserKanjiEntry.user_id == user_id).limit(10))
    
    setStudy = kanji_to_study.scalars().all()

    return [i.kanji for i in setStudy]



