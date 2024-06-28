from motor.motor_asyncio import AsyncIOMotorClient
import random
import os
from pathlib import Path

#чтобы запустить бд
#cd MangaReader
#mongod --port 2000 --dbpath db
class Mangadb:
    def __init__(self):
        self.db = AsyncIOMotorClient("mongodb://localhost:2000")
        self.cl = self.db.mangadb.db

    async def create_manga(self, name: str, nameSyst, desc: str):
        folder_path = os.path.abspath(f"static/mangas/{name}")
        folder = Path(folder_path)
        
        pattern = {
            "_id": random.randint(1, 99999),
            "name": name,
            "nameSyst": nameSyst,
            "CountOfPages": len(list(folder.iterdir()))-1,
            "path": f"static/mangas/{name}",
            "desc": desc,
            "coverPath": f"static/mangas/{name}/cover.png",
            "views": 0,
            "likes": 0,
            "comments": {}
        }

        await self.cl.insert_one(pattern)

        return pattern['_id']

    async def get_all_mangas(self):
        mangas = []
        async for manga in self.cl.find({}):
            mangas.append(manga)
        return mangas
    
    async def find_one(self, name:str):
        return await self.cl.find_one({"name": name})
    
    async def manga_by_id(self, id:int):
        return await self.cl.find_one({"_id": id})
    
    async def find_all_one(self, name):
        mangas = []
        async for manga in self.cl.find({"name": name}):
            mangas.append(manga)
        return mangas


