from fastapi import UploadFile, File, HTTPException, FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import os

app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory='static'), name="static")

@app.get("/", response_class=HTMLResponse,)
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/manga/{manga_folder}", response_class=HTMLResponse)
async def read_manga_page(request: Request, manga_folder: str):
    folder = Path('static/', manga_folder)
    pages_number = sorted([str(img.name) for img in folder.iterdir()])
    return templates.TemplateResponse(
        "manga_page.html",
        {"request": request, "manga_folder": manga_folder, "manga_images": pages_number},
    )

if __name__ == '__main__':
    os.system(f"uvicorn main:app --port {8002} --reload")