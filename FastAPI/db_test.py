import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

cluster = AsyncIOMotorClient("mongodb+srv://lox:aboba228@cluster0.hiz9roq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
cl = cluster.Qqy.users

async def main():
  data = await cl.find_one({})
  print(data)

asyncio.run(main())

