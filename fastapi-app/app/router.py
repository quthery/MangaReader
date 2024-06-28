from fastapi import APIRouter, Body, UploadFile
from fastapi.responses import FileResponse
from database.mongo import Mangadb
from database.comments import Comdb
from pathlib import Path
import aiofiles
import os

router = APIRouter()
db = Mangadb()
comdb = Comdb()

@router.post("/create_manga")
async def add_manga(data = Body()):
    added = await db.create_manga(name=data['name'], desc=data['desc'], nameSyst=['nameSyst'])
    return {"200?": True, "Manga_id": added}



@router.post("/create_manga_test")
async def add_manga_test(Cover: UploadFile, name , desc):
    folder_path = os.path.abspath(f"static/mangas/{name}")
    folder = Path(folder_path)
    added = await db.create_manga(name=name, desc=desc, path="static/mangas/"+name,
                                  CountOfPages=len(list(folder.iterdir()))-1,
                                  coverPath=f"static/mangas/{name}/cover.png")
    async with aiofiles.open(f"static/mangas/{name}/cover.png", 'wb') as out_file:
        content = await Cover.read() 
        await out_file.write(content)
    return {"200?": True, "Manga_id": added}


@router.get("/get_all")
async def all():
    mangas = await db.get_all_mangas()
    return {"allMangas": mangas}

@router.get("/{mangaName}/{id}")
async def read_manga_page(id: str, mangaName: str):
    return FileResponse(f'static/mangas/{mangaName}/{id}.jpeg')

@router.get("/manga_all_pages")
async def all_pages(mangaName:str):
    folder_path = os.path.abspath(f"static/mangas/{mangaName}")
    folder = Path(folder_path)
    if folder.is_dir():
        return {"countOfPages": len(list(folder.iterdir()))}
    else:
        return "isnt folder!"


@router.get("/find_manga_by_id")
async def find_by_id(id:int):
    return {"manga": await db.manga_by_id(id=id)}

@router.get("/get_cover")
async def get_cover_manga(MangaName:str):
    prewiew = await db.cl.find_one({"name": MangaName})
    return FileResponse(prewiew['coverPath'])

@router.get("/find_manga")
async def get_manga_by_name(MangaName:str):
    return {"manga": await db.find_one(name=MangaName)}


@router.get("/get_all_by_name")
async def all_one(MangaName:str):
    return {"mangas": await db.find_all_one(name=MangaName)}

@router.get("/get_all_mangas_pg")
async def all_one(numberOfPage:int,countMangas:int):
    allMangas = await db.get_all_mangas()
    mangasByPagination = [[]]
    
    for i in range(0,len(allMangas)):
        if i % countMangas == 0 and i != 0:
            mangasByPagination.append([])
        mangasByPagination[-1].append(allMangas[i])
    
    if numberOfPage >= len(mangasByPagination):
        return {"mangas": ['PageCountError']}
    else:
        return {"mangas": mangasByPagination[numberOfPage],"totalyCount": (len(mangasByPagination) - 1)}


@router.post("/add_comment")
async def add_comment(MangaName:str, user: str, text:str):
    await comdb.add_comment(MangaName, user, text)
    return {"added?": 200}
@router.get("/test_comment")
async def test_comment():
    comment = await comdb.add_comment("jujika", "quthery", "noob")
    return {"comment": comment}
    return comment