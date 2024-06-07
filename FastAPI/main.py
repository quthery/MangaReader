from fastapi import UploadFile, File, HTTPException, FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from database import Mangadb
import os
import shutil
import zipfile

db = Mangadb()
app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory='/home/quthery/MangaReader/static'), name="static")

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
    
@app.post("/manga/add/{manga_name}/{manga_folder}/{preview}/{desc}/{pages_number}")
async def add_manga(manga_name: str, manga_folder: str, preview: str, desc: str, pages_number: int, file: UploadFile = File(...)):
    
    if not file.filename.endswith(".zip"):
        raise HTTPException(status_code=400, detail="Uploaded file is not a zip archive.")

    
    manga_folder_path = os.path.join("static", manga_name)
    if not os.path.exists(manga_folder_path):
        os.makedirs(manga_folder_path)

    
    with zipfile.ZipFile(file.file, "r") as zip_ref:
        zip_ref.extractall(manga_folder_path)

    
    await db.create_manga(manga_name=manga_name, pages_number=pages_number, manga_folder=manga_folder, desc=desc, preview=preview)

    return {"message": "Manga added successfully."}

@app.get("/get_all")
async def get_all(request: Request):
    mangas = await db.get_all_mangas()
    
    return {f"{mangas}"}
    


