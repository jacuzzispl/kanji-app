from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from .routers import auth

origins = ["http://localhost:8000"]

app = FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])



app.include_router(auth.router)

@app.get("/")
def home():
    try:
        with engine.connect() as conn:
            return {"status" : "ok", "database" : "connected"}
    except Exception as e:
        return {"status" : "ok", "database" : str(e)}