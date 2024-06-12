from fastapi import APIRouter, Body, UploadFile
from fastapi.responses import FileResponse
from repository import MangaRepository
from pathlib import Path
import aiofiles
import os

router = APIRouter()


@router.post("/create_manga")
async def add_manga(data = Body()):
    added = await MangaRepository.add_one(name=data['name'], desc=data['desc'], path=data['path'],CountOfPages=data['CountOfPages'], coverPath=data['coverPath'])
    return {"200?": True, "Manga_id": added}



@router.post("/create_manga_test")
async def add_manga_test(Cover: UploadFile, CounOfPages, name , desc, path):
    added = await MangaRepository.add_one(name=name, desc=desc, path=path,CountOfPages=CounOfPages, coverPath="static/covers/"+Cover.filename)
    async with aiofiles.open("static/covers/"+Cover.filename, 'wb') as out_file:
        content = await Cover.read()
        await out_file.write(content)
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
    folder_path = os.path.abspath(f"static/mangas/{data['mangaName']}")
    folder = Path(folder_path)
    if folder.is_dir():
        return {"All files": len(list(folder.iterdir()))}
    else:
        return {"It is not folder?": "Yes"}

@router.get("/find_manga_path")
async def getMangaByName(MangaName:str):
    manga = await MangaRepository.get_manga(MangaName)
    return {"manga": manga.path}


@router.get("/find_manga_path")
async def getMangaByName(MangaName:str):
    manga = await MangaRepository.get_manga(MangaName)
    return {"manga": manga.path}

@router.get("/find_manga_coverPath")
async def getMangaByName(MangaName:str):
    manga = await MangaRepository.get_manga(MangaName)
    return {"manga": manga.coverPath}

@router.get("/find_manga_by_id")
async def find_by_id(id:int):
    manga = await MangaRepository.by_id(id)
    return {"manga": manga}


@router.get("/get_cover")
async def get_cover_manga(MangaName:str):
    manga = await MangaRepository.get_manga(MangaName)
    mangacover = manga.coverPath
    return FileResponse(mangacover)
