import { Pokemon } from "@/common/models"
import { pokemon } from "@/srv/db"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon | { message: string }>
) {
  const slug = req.query.slug as string
  const raw = await pokemon.findOne({
    $or: [
      // @ts-ignore
      { number: { $eq: Number(slug) } },
      { $text: { $search: slug } },
    ],
  })
  if (raw === null) {
    return res.status(404).json({ message: "Pokemon does not exist" })
  }
  return res.status(200).json(raw)
}
