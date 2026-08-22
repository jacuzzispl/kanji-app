from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship, Mapped, mapped_column
from datetime import datetime, timezone
from .Base import Base


class Kanji(Base):
    __tablename__ = "kanji"
    id : Mapped[int] = mapped_column(primary_key=True, 	autoincrement=True)
    character : Mapped[str] = mapped_column(String)
    meaning: Mapped[str]
    onyomi_katakana : Mapped[str]
    onyomi_romaji : Mapped[str]
    kunyomi_hiragana : Mapped[str | None]
    kunyomi_romaji : Mapped[str | None]
    radical : Mapped[str | None]
    radical_meaning = Mapped[str | None]
    stroke_count : Mapped[int]
    jlpt_level : Mapped[int]
    curriculumn_order : Mapped[int]