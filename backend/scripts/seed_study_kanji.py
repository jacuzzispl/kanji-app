from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from ..app.models
from database import get_db

async def seed_study_kanji(level: int, session = get_db):
    #get all the kanji from db by their jlpt level
    query = await session.execute(select(Kanji).where(Kanji.jlpt_level == level))
    result = query.scalar()
    for i in result:
        print(i)

seed_study_kanji(1)