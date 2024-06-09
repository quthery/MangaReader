from database import new_session, MangaORM
from sqlalchemy import select

from sqlalchemy.engine import Result

class MangaRepository:
    @classmethod
    async def add_one(cls,name, desc, path, coverPath, CountOfPages):
        async with new_session() as session:
            manga = MangaORM(name=name, desc=desc, path=path, coverPath=coverPath, CountOfPages=CountOfPages)
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

    #он работает ураааа
    @classmethod
    async def get_manga(cls, MangaName:str):
        async with new_session() as session:
            stmt = select(MangaORM).where(MangaORM.name == MangaName)
            result: Result = await session.execute(stmt)
            manga = result.scalar_one_or_none()
            return manga
        
            


