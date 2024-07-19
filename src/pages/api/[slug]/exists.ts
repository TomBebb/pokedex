import { pokemon } from "@/srv/db"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<boolean | { message: string }>
) {
  const slug = req.query.slug as string
  const count = await pokemon.countDocuments({
    $or: [
      // @ts-ignore
      { number: { $eq: Number(slug) } },
      { $text: { $search: slug } },
    ],
  })
  return res.status(200).json(count > 0)
}
