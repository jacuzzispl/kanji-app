from sqlalchemy import ForeignKey, DateTime, String, Integer, Float, func
from sqlalchemy.orm import relationship, Mapped, mapped_column
from datetime import datetime 
from ..models import Base

class UserKanjiEntry(Base):
    __tablename__ = "user_kanji"
    id : Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id : Mapped[int] = mapped_column(Integer, ForeignKey("user_profiles.id"))
    kanji_id : Mapped[int] = mapped_column(ForeignKey("kanji.id"))
    status : Mapped[str] = mapped_column(String, nullable=False)
    interval_days : Mapped[float] = mapped_column(Float) #1 equivalent to 1 day
    times_reviewed : Mapped[int] = mapped_column(Integer, default = 0)
    times_correct : Mapped[int] = mapped_column(Integer, default=0)
    last_reviewed_at : Mapped[datetime] = mapped_column(DateTime(timezone=True), default=func.now(), nullable= False)
    next_review_at : Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable = False)
    ease_factor : Mapped[float] = mapped_column(Float, nullable = True)
    created_at : Mapped[datetime] = mapped_column(DateTime, nullable=False)
    
    user = relationship("User")
    kanji = relationship("Kanji")