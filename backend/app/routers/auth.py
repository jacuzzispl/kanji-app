from fastapi import APIRouter
from dotenv import load_dotenv
import os

load_dotenv()
router = APIRouter()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
TOKEN_DURATION = 1440


@router.register("/register")
async def register():