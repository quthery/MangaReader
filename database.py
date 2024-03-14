from motor.motor_asyncio import AsyncIOMotorClient
import random
import asyncio


cluster = AsyncIOMotorClient("mongodb+srv://quthery:aboba228@cluster0.boxsq6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
cl = cluster.nineteen.Manga

def create_manga(manga_name: str, pages_number:int, manga_folder: str, desc:str, preview:str, cl=cluster.nineteen.Manga):
    
    pattern = {
        "_id": random.randrange(0, 1000000),
        "_name": manga_name,
        "pages_number": pages_number,
        "path": manga_folder,
        "desc": desc,
        "preview": preview,

    }


    cl.insert_one(pattern)
    
create_manga(manga_name="HxH manga", pages_number=1448, manga_folder="path/Manga", desc="asdadadas", preview="dsadasd/dsadasdas" )
    


