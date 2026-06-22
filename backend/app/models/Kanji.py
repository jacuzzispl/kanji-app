from sqlalchemy import Column, Integer, String, FLoat, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship, DeclarativeBase, Mapped, mapped_column
from datetime import datetime, timezone
from app.database import Base

class Base(DeclarativeBase):
    pass

class Kanji(Base):
    __tablename__ = "Kanji"
    id : Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    character : Mapped[str] = mapped_column(String)
    meaning: Mapped[str]
    onyomi : Mapped[str]
    kunyomi : Mapped[str | None]
    radicals : Mapped[str | None] 
    stroke_count : Mapped[int]
    jlpt_level : Mapped[int]
    curriculumn_order : Mapped[int]

