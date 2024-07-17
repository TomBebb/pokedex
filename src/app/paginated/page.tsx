"use client"
import PokemonTypeDisplay from "@/app/components/PokemonTypeDisplay"
import "@/app/globals.css"
import { Paginated, Pokemon } from "@/common/models"
import { useFetch } from "@mantine/hooks"

export default function PaginatedPage() {
  const { data } = useFetch<Paginated<Pokemon>>("/api/paginated")
  return data ? (
    <div className="grid grid-cols-2">
      {data.items.map((p: Pokemon) => (
        <>
          <div>{p.name}</div>

          <div className="grid grid-cols-2 select-none">
            {p.types.map((t) => (
              <PokemonTypeDisplay value={t} />
            ))}
          </div>
        </>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  )
}
