from database import new_session, MangaORM
from sqlalchemy import select
import asyncio


class MangaRepository:
    @classmethod
    async def add_one(cls,name, desc, path, coverPath):
        async with new_session() as session:
            manga = MangaORM(name=name, desc=desc, path=path, coverPath=coverPath)
            session.add(manga)
            await session.flush()
            await session.commit()
            return manga.id



    @classmethod
    async def get_all(cls):
        async with new_session() as session:
            query = select(MangaORM)
            result = await session.execute(query)
            task_models = result.scalars().all()
            return task_models
        

