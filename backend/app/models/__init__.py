from app.models.Users import User
from app.models.Kanji import Kanji
from app.models.UserKanji import UserKanjiEntry
from app.models.ReviewLog import Review

from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass