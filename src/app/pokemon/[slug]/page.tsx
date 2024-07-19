"use client"
import Button from "@/app/components/Button"
import KeyValueView from "@/app/components/KeyValueView"
import PokemonTypeDisplay from "@/app/components/PokemonTypeDisplay"
import {
  Pokemon,
  resolveSpriteUrl,
  SpriteSide,
  SpriteVariant,
} from "@/common/models"
import { useFetch } from "@mantine/hooks"
import { useParams } from "next/navigation"
import { useMemo, useState } from "react"

export default function PokemonView() {
  const { slug } = useParams<{ slug: string }>()!
  const { data } = useFetch<Pokemon>("/api/" + slug)
  const [spriteSide, setSpriteSide] = useState<SpriteSide>(SpriteSide.Front)
  const num = useMemo(() => parseInt(data?.number as string), [data?.number])
  // @ts-ignore
  const { data: hasNext } = useFetch<boolean>(`/api/${num + 1}/exists`)
  // @ts-ignore
  const { data: hasPrev } = useFetch<boolean>(`/api/${num - 1}/exists`)

  const [spriteVariant, setSpriteVariant] = useState<SpriteVariant>(
    SpriteVariant.Default
  )

  return data !== null ? (
    <div className="grid grid-cols-6 justify-items-stretch gap-2">
      <Button
        disabled={!hasPrev ?? false}
        href={`/pokemon/${num - 1}`}
        className="col-span-3 text-center lg:col-span-1 lg:text-left"
      >
        Prev
      </Button>
      <div className="flex flex-row row-start-2 lg:row-start-1 lg:col-start-2 col-span-6 lg:col-span-4 gap-2">
        <KeyValueView name="Side" className="flex-1">
          <select
            className="bg-black "
            onChange={(v) => {
              setSpriteSide(v.target.value as SpriteSide)
            }}
          >
            {Object.entries(SpriteSide).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </KeyValueView>
        <KeyValueView name="Variant" className="flex-1">
          <select
            className="bg-black col-span-3 "
            onChange={(v) => {
              setSpriteVariant(v.target.value as SpriteVariant)
            }}
          >
            {Object.entries(SpriteVariant).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </KeyValueView>
      </div>
      <Button
        disabled={!hasNext ?? false}
        href={`/pokemon/${num + 1}`}
        className="col-span-3 lg:col-span-1 lg:text-right text-center"
      >
        Next
      </Button>

      <img
        className="object-cover pixelated w-full lg:col-span-2 col-span-6 max-w-[20vw] justify-self-center"
        src={resolveSpriteUrl(data.number, spriteSide, spriteVariant)}
      />
      <div className="flex flex-col col-span-6 lg:col-span-4">
        <KeyValueView name="Number">
          {data!.number.toString().padStart(4, "0")}
        </KeyValueView>
        <KeyValueView name="Name">{data!.name}</KeyValueView>
        <KeyValueView name="Types">
          <div className="w-full flex flex-row gap-5 justify-center lg:justify-start">
            {data.types.map((ty) => (
              <PokemonTypeDisplay key={ty} value={ty} />
            ))}
          </div>
        </KeyValueView>
        <KeyValueView name="Abilities">
          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start">
            {data.abilities.map((a) => (
              <div key={a.name} className="border-r-[0.1vw] px-1 flex-col">
                <div className="font-bold border-b-2 border-b-gray-700">
                  {a.name}
                </div>
                <div>{a.description}</div>
              </div>
            ))}
          </div>
        </KeyValueView>
        <KeyValueView name="Height">{data.height}</KeyValueView>
        <KeyValueView name="Weight">{data.weight}</KeyValueView>
        <KeyValueView name="Generation">{data.gen}</KeyValueView>
        <KeyValueView name="HP">{data.baseStats.hp}</KeyValueView>
        <KeyValueView name="Attack">{data.baseStats.attack}</KeyValueView>
        <KeyValueView name="Defense">{data.baseStats.defense}</KeyValueView>
        <KeyValueView name="Special Attack">
          {data.baseStats.spAtk}
        </KeyValueView>
        <KeyValueView name="Special Defense">
          {data.baseStats.spDef}
        </KeyValueView>
        <KeyValueView name="Speed">{data.baseStats.speed}</KeyValueView>
      </div>
    </div>
  ) : (
    <>Loading...</>
  )
}
