from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    
@app.get("/getMangePage/{id}")
async def read_manga_page(request: Request, id: str):
    return FileResponse(Path(f'static/manga/{id}.jpeg'))

if __name__ == '__main__':
    os.system(f"uvicorn main:app --port {8003} --reload")
    # cd react-app
    # npm run start