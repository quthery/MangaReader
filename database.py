import asyncio
import random
from motor.motor_asyncio import AsyncIOMotorClient

class Mangadb():
    def __init__(self):
        self.cluster = AsyncIOMotorClient("mongodb+srv://quthery:aboba228@cluster0.boxsq6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        self.cl = self.cluster.nineteen.Manga

    async def create_manga(self, manga_name: str, pages_number: int, manga_folder: str, desc: str, preview: str):      
        pattern = {
            "_id": random.randrange(0, 1000000),
            "_name": manga_name,
            "pages_number": pages_number,
            "path": manga_folder,
            "desc": desc,
            "preview": preview,
        }

        await self.cl.insert_one(pattern)

    async def get_all_mangas(self):
        mangas = []
        async for manga in self.cl.find({}):
            mangas.append(manga)        
        return mangas
        
        



            


