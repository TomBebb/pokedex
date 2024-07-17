import { Pokemon } from "@/common/models"
import { MongoClient } from "mongodb"

const url = process.env.DATABASE_URL
if (!url) throw new Error("MongoDB URL must be defined")
export const db = new MongoClient(url)
await db.connect()

export const pokemon = db.db().collection<Pokemon>("pokemon")
