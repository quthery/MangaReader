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
            "_id": random.randrange(0, 1000000),
            "name": name,
            "CountOfPages": CountOfPages,
            "path": path,
            "desc": desc,
            "coverPath": coverPath,
            "views": 0,
            "likes": 0,
            "comments": {}
        }

        result = await self.cl.insert_one(pattern)
        
        retrieved_document = await self.cl.find_one({"_id": result.inserted_id})
        print(result.inserted_id)
        print(f"Извлеченная строка: {retrieved_document['desc']}")

        return pattern['_id']

    async def get_all_mangas(self):
        mangas = []
        async for manga in self.cl.find({}):
            mangas.append(manga)
        return mangas
    
    async def find_one(self, name:str):
        return await self.cl.find_one({"name": name})
    
    async def manga_by_id(self, id:int):
        retrieved_document = await self.cl.find_one({"name": id})
        print('')
        print(f"asdfasdfd {retrieved_document['desc']}")
        return await self.cl.find_one({"_id": id})
    
    async def find_all_one(self, name):
        mangas = []
        async for manga in self.cl.find({"name": name}):
            mangas.append(manga)
        return mangas


