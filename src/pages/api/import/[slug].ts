import type { NextApiRequest, NextApiResponse } from 'next'
import {getPokemon} from "@/srv/dex_api";
import {Pokemon} from "@/common/models";
import {pokemon} from "@/srv/db";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const slug = req.query.slug as string
    const pkm = await getPokemon(slug)
    await pokemon.insertOne(pkm)
    return res.status(200).json({'message': `Fetched ${slug}`})
}
