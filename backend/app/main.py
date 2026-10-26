from fastapi import FastAPI
from app.database import engine
from .routers import auth, kanji, lessons


app = FastAPI()
app.include_router(auth.router)
app.include_router(kanji.router)
app.include_router(lessons.router)

@app.get("/")
def home():
    try:
        with engine.connect() as conn:
            return {"status" : "ok", "database" : "connected"}
    except Exception as e:
        return {"status" : "ok", "database" : str(e)}