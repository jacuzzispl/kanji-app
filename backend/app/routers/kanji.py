#routes most likely will need
# - GET /kanji
# - POST /kanji{id}/review
# - GET /kanji/due
# - GET /kanji/{id}

from fastapi import APIRouter, Depends
from app.database import get_db
from typing import Annotated
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()

@router.get("/kanji/due")
def get_due_kanji(session: Annotated[AsyncSession, Depends(get_db)]):
    pass
