from fastapi import UploadFile, File, HTTPException, FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os

app = FastAPI()
templates = Jinja2Templates(directory="templates")

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

@app.get("/manga/{manga_folder}", response_class=HTMLResponse)
async def read_manga_page(request: Request, manga_folder: str):
    folder = Path('static/', manga_folder)
    pages_number = sorted([str(img.name) for img in folder.iterdir()])
    return templates.TemplateResponse(
        "manga_page.html",
        {"request": request, "manga_folder": manga_folder, "manga_images": pages_number},
    )
    
@app.get("/getMangePage/{id}")
async def read_manga_page(request: Request, id: str):
    print('123')
    return FileResponse(Path(f'static/manga/{id}.jpeg'))

if __name__ == '__main__':
    os.system(f"uvicorn main:app --port {8003} --reload")
    # cd react-app
    # npm run start