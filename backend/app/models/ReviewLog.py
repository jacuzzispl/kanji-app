from sqlalchemy import Integer, String, DateTime, ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime

class Base(DeclarativeBase):
    pass

class Review(Base):
    __tablename__ = "ReviewLog"
    id : Mapped[int] = mapped_column(Integer, primary_key=True, nullable=False, autoincremenet=True)
    user_id : Mapped[int] = mapped_column(Integer, ForeignKey("Users.id"), nullable=False)
    kanji_id : Mapped[int] = mapped_column(Integer, ForeignKey("Kanji.id"), nullable = False)
    reviewed_at : Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    result : Mapped[str] = mapped_column(String(10), nullable=False)
    response_time : Mapped[datetime]