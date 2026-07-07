import os
import requests
import time
import asyncio
import aiohttp
from dotenv import load_dotenv
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from utils.db import table_is_populated
from app.models.Kanji import Kanji
from typing import List

async def get_kanji_data_by_grade(grade:int) -> List[str]:

    if grade not in range(1,6):
        return []
 
    url = "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/"

    querystring = {"grade": str(grade)}

    headers = {
        "x-rapidapi-key": "77e20574cemsha4e151f542aad6cp10fb6ejsn136b73c9ccc6",
        "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        "Content-Type": "application/json"
    }

    response = requests.get(url, headers=headers, params=querystring)
    grade_list = [kanji['kanji']['character'] for kanji in response.json()]
    

    async with aiohttp.ClientSession() as session:
        grade_list = [kanji for kanji in grade_list]
        results = await asyncio.gather(*[get_single_kanji_data(session, kanji) for kanji in grade_list])
    
    data = [result for result in results]

    print([kanji for kanji in data])
            




async def get_single_kanji_data(session, kanji:str) -> dict:


    url = f"https://kanjialive-api.p.rapidapi.com/api/public/kanji/{kanji}"

    headers = {
        "x-rapidapi-key": "77e20574cemsha4e151f542aad6cp10fb6ejsn136b73c9ccc6",
        "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
        "Content-Type": "application/json"
    }

    async with session.get(url, headers=headers) as response:
        return await response.json()
    


def seed_kanji_table():

    load_dotenv()
    engine = create_engine(os.getenv("DATABASE_URL"))


    if table_is_populated(table="kanji", engine=engine)[0]:
        return "Table is already populated"

    grade_one_kanji = get_kanji_data_by_grade(1)



if __name__ == "__main__":
    asyncio.run(get_kanji_data_by_grade(1))

    




