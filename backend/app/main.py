from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
from .routers import auth, kanji

origins = ["*"]

app = FastAPI()
app.add_middleware(CORSMiddleware,
               allow_origins=origins,
               allow_credentials=False,
               allow_headers=["*"],
               allow_methods=["*"])

app.include_router(auth.router)
app.include_router(kanji.router)

@app.get("/")
def home():
    try:
        with engine.connect() as conn:
            return {"status" : "ok", "database" : "connected"}
    except Exception as e:
        return {"status" : "ok", "database" : str(e)}