"use client"
import PokemonTypeDisplay from "@/app/components/PokemonTypeDisplay"
import "@/app/globals.css"
import { Paginated, Pokemon } from "@/common/models"
import { useFetch } from "@mantine/hooks"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function PaginatedPage() {
  const params = useSearchParams()
  const { data } = useFetch<Paginated<Pokemon>>("/api/paginated?" + params)
  const hasNext = useMemo(
    () => data !== null && data.offset + data.items.length < data.total,
    [data]
  )
  const nextLink = useMemo<string | null>(
    () =>
      hasNext
        ? "/paginated?" +
          new URLSearchParams({
            limit: data!.limit!.toString(),
            offset: (data!.offset! + data!.limit!).toString(),
          })
        : null,
    [data, hasNext]
  )
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

      <div className="col-span-2">
        {nextLink && (
          <Link href={nextLink} className="p-2  outline-3">
            Next
          </Link>
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}
