from motor.motor_asyncio import AsyncIOMotorClient

class User:
    def __init__(self):
        self.db = AsyncIOMotorClient("mongodb://localhost:2000")
        self.cl = self.db.mangadb.comments
        self.cl1 = self.db.mangadb.db

    async def add_user(self, login: str, password: str):
        pattern = {
            "_id": await self.cl.count_documents({}) + 1,
            "login": login,
            "password": password,
        }

        await self.cl.insert_one(pattern)
        await self.cl1.update_one({"name": manga_name}, {"$set": {"comments": await self.get_all_by_name(manga_name)}})

        return pattern
