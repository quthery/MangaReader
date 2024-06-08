from fastapi import APIRouter, Body
from fastapi.responses import FileResponse
from repository import MangaRepository
from pathlib import Path
from os import path

router = APIRouter()


@router.post("/create_manga")
async def add_manga(data = Body()):
    added = await MangaRepository.add_one(name=data['name'], desc=data['desc'], path=data['path'], coverPath=data['coverPath'])
    return {"200?": True, "Manga_id": added}


@router.get("/get_all")
async def get_all_mangas():
    mangas = await MangaRepository.get_all()
    return {"allMangas": mangas}

@router.get("/{mangaName}/{id}")
async def read_manga_page(id: str, mangaName: str):
    return FileResponse(f'static/mangas/{mangaName}/{id}.jpeg')

@router.post("/manga_all_pages")
async def all_pages(data = Body()):
    print(data)
    folder_path = path.abspath(f'static/mangas/{data["mangaName"]}')
    folder = Path(folder_path)
    return {"All files": len(list(folder.iterdir()))}
