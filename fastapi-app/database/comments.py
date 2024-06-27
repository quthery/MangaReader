from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

class Comdb:
    def __init__(self):
        self.db = AsyncIOMotorClient("mongodb://localhost:2000")
        self.cl = self.db.mangadb.comments
        self.cl1 = self.db.mangadb.db

    async def get_all_by_name(self, name):
        mangas = []
        async for manga in self.cl.find({"manga_name": name}, {'_id': 0}):  # Исключаем _id
            mangas.append(manga)
        return mangas

    async def add_comment(self, manga_name: str, user: str, text: str):
        pattern = {
            "_id": await self.cl.count_documents({}) + 1,
            "manga_name": manga_name,
            "user": user,
            "text": text,
        }

        await self.cl.insert_one(pattern)
        await self.cl1.update_one({"name": manga_name}, {"$set": {"comments": await self.get_all_by_name(manga_name)}})

        return pattern
