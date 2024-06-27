from motor.motor_asyncio import AsyncIOMotorClient
import random
import asyncio
#чтобы запустить бд
#cd MangaReader
#mongod --port 2000 --dbpath db
class Mangadb:
    def __init__(self):
        self.db = AsyncIOMotorClient("mongodb://localhost:2000")
        self.cl = self.db.mangadb.db

    async def create_manga(self, name: str, CountOfPages: int, path: str, desc: str, coverPath: str):


        pattern = {
            "_id": random.randint(1, 99999),
            "name": name,
            "CountOfPages": CountOfPages,
            "path": path,
            "desc": desc,
            "coverPath": coverPath,
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


