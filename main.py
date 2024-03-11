from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory='static'), name="static")

@app.get("/manga/{manga_folder}", response_class=HTMLResponse)
async def read_manga_page(request: Request, manga_folder: str):
    folder = Path('static/', manga_folder)
    pages_number = sorted([str(img.name) for img in folder.iterdir()])
    return templates.TemplateResponse(
        "manga_page.html",
        {"request": request, "manga_folder": manga_folder, "manga_images": pages_number},
    )
