import {MongoClient} from 'mongodb';
import {Pokemon} from "@/common/models";

const url = process.env.DATABASE_URL;
if (!url)
    throw new Error('MongoDB URL must be defined');
export const db = new MongoClient(url)
await db.connect();

export const pokemon =  db.db().collection<Pokemon>('pokemon');
