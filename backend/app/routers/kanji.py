from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, exists
from scripts.seed_study_kanji import seed_study_kanji
from database import get_db
from typing import Annotated, List
from ..models import UserKanjiEntry, Kanji
import jwt
from jwt.exceptions import InvalidTokenError
import os
import asyncio

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = os.getenv("SECRET_KEY")

@router.get("/study")
async def get_study_kanji(session: Annotated[AsyncSession, Depends(get_db)],
                           token: str = Depends(oauth2_scheme)):
    

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"], options={"verify_signature": False})
        user_id = payload["sub"]
        if user_id is None:
            return HTTPException(status_code=401, detail="Could not find user")
    except Exception as e:
        print(e)
        raise HTTPException(status_code=402)

    result = await session.execute(select(UserKanjiEntry.id).where(UserKanjiEntry.user_id == int(user_id)).limit(1))
    kanji_instantiated = result.scalar() is not None


    if not kanji_instantiated:
        await seed_study_kanji(int(user_id), 1)

    kanji_to_study = await session.execute(select(UserKanjiEntry).where(UserKanjiEntry.status == "Not Learned",
                                                                        UserKanjiEntry.user_id == user_id).limit(10))
    
    setStudy = kanji_to_study.scalars().all()

    return [i.kanji for i in setStudy]



