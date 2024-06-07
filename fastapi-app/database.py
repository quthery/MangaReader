from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

engine = create_async_engine(
    "sqlite+aiosqlite:///manga.db"
)

new_session = async_sessionmaker(engine, expire_on_commit=False)

class Model(DeclarativeBase):
    pass


class MangaORM(Model):
    __tablename__ = "MangaTable"


    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column()
    desc: Mapped[str] = mapped_column(nullable=True)
    coverPath: Mapped[str] = mapped_column(nullable=False)
    path: Mapped[str]
    

async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Model.metadata.create_all)

