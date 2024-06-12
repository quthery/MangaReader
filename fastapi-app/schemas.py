from pydantic import BaseModel
import os
from pathlib import Path

class AddManga(BaseModel):
    name: str
    CountOfPages: int
    path: str
    desc: str
    coverPath: str


