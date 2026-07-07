from sqlalchemy import Integer, Float, String, DateTime, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
from ..models import Base


class Review(Base):
    __tablename__ = "review_log"
    
    id : Mapped[int] = mapped_column(Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id : Mapped[int] = mapped_column(Integer, ForeignKey("user_profiles.id"), nullable=False)
    kanji_id : Mapped[int] = mapped_column(Integer, ForeignKey("kanji.id"), nullable = False)
    reviewed_at : Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    result : Mapped[str] = mapped_column(String(10), nullable=False)
    response_time_s : Mapped[int] = mapped_column(Integer, nullable = False)
    ease_factor_before : Mapped[float] = mapped_column(Float, nullable = False)
    interval_before : Mapped[float] = mapped_column(Float)
    interval_after : Mapped[float] = mapped_column(Float)