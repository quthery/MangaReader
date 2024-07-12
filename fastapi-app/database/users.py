from motor.motor_asyncio import AsyncIOMotorClient

class User:
    def __init__(self):
        self.db = AsyncIOMotorClient("mongodb://localhost:2000")
        self.cl = self.db.mangadb.users

    async def add_user(self, login: str, password: str):
        pattern = {
            "_id": await self.cl.count_documents({}) + 1,
            "login": login,
            "password": password,
        }

        await self.cl.insert_one(pattern)

        return pattern
    
    async def get_users(self):
        users = []
        async for manga in self.cl.find({}):
            users.append(manga)

        return users
    
    async def get_user(self, login, password):
        return await self.cl.find_one({"login": login, "password":password})
