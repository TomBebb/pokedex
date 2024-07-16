import type { NextApiRequest, NextApiResponse } from 'next'
import {getPokemon} from "@/srv/dex_api";
import {Pokemon} from "@/common/models";
import {pokemon} from "@/srv/db";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Pokemon|{message: string}>
) {
    const slug = req.query.slug as string
    const raw = await pokemon.findOne({number: {$eq: Number(slug)}})
    if (raw === null) {
        return res.status(404).json({message: 'Pokemon does not exist'})
    }
    return res.status(200).json(raw)
}
