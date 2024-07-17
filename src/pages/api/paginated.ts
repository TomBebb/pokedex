import type {NextApiRequest, NextApiResponse} from 'next'
import {Paginated, Pokemon} from "@/common/models";
import {pokemon} from "@/srv/db";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Paginated<Pokemon> | { message: string }>
) {
    const {limit, offset} = {limit: Number(req.query.limit ?? 10), offset: Number(req.query.offset ?? 0)}
    const total = await pokemon.countDocuments();
    const raw = await pokemon.find({}, {limit: limit, skip: offset}).toArray()
    if (raw === null) {
        return res.status(404).json({message: 'Pokemon does not exist'})
    }
    return res.status(200).json({
        limit,
        offset,
        items: raw,
        total
    })
}
