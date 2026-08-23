from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models import Kanji, UserKanjiEntry
from database import SessionLocal
import asyncio

async def seed_study_kanji(level: int, session_factory = SessionLocal):
    #get all the kanji from db by their jlpt level
    async with SessionLocal() as session:
        query = await session.execute(select(Kanji).where(Kanji.jlpt_level == level))
        result = query.scalars()
    for i in result:
        print(i)

async def main():
    await seed_study_kanji(1)

# Run the main async loop
asyncio.run(main())