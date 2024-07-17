import { Pokemon } from "@/common/models"

export async function get<TRet>(path: string): Promise<TRet> {
  const res = await fetch(`https://ex.traction.one/pokedex${path}`, {
    headers: new Headers({
      "User-Agent": "PokedexImporter (https://github.com/TomBebb, 1.0.0)",
    }),
  })
  return res.json()
}
export async function getPokemon(slug: number | string): Promise<Pokemon> {
  console.info("getPokemon", slug)
  const res = await get<Pokemon[]>(`/pokemon/${slug}`)
  console.log(res)
  return res[0]
}
