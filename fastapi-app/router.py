from fastapi import APIRouter, Body
from fastapi.responses import FileResponse
from repository import MangaRepository

router = APIRouter()


@router.post("/create_manga")
async def add_manga(data = Body()):
    added = await MangaRepository.add_one(name=data['name'], desc=data['desc'], path=data['path'], coverPath=data['coverPath'])
    return {"200?": True, "Manga_id": added}


@router.get("/get_all")
async def get_all_mangas():
    mangas = await MangaRepository.get_all()
    return {"allMangas": mangas}

@router.get("/getMangePage/{id}")
async def read_manga_page(id: str):
    return FileResponse(f'static/manga/{id}.jpeg')
