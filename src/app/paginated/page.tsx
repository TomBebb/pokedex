"use client"
import Button from "@/app/components/Button"
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
  const hasPrev = useMemo(() => data !== null && data.offset > 0, [data])
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
  const prevLink = useMemo<string | null>(
    () =>
      hasPrev
        ? "/paginated?" +
          new URLSearchParams({
            limit: data!.limit!.toString(),
            offset: (data!.offset! - data!.limit!).toString(),
          })
        : null,
    [data, hasPrev]
  )
  return data ? (
    <div className="flex flex-col">
      {data.items.map((p: Pokemon) => (
        // eslint-disable-next-line react/jsx-no-undef
        <Link
          href={`/pokemon/${p.number}`}
          key={p.number}
          className="grid grid-cols-2"
        >
          <div>{p.name}</div>

          <div className="grid grid-cols-2 select-none">
            {p.types.map((t) => (
              <PokemonTypeDisplay key={t} value={t} />
            ))}
          </div>
        </Link>
      ))}

      <div className="col-span-2 flex flex-row">
        {prevLink && <Button href={prevLink}>Prev</Button>}
        {nextLink && (
          <Button href={nextLink} className="ml-auto">
            Next
          </Button>
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}
