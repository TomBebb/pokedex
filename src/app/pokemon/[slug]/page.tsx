"use client"
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
import { useState } from "react"

export default function PokemonView() {
  const { slug } = useParams<{ slug: string }>()!
  const { data } = useFetch<Pokemon>("/api/" + slug)
  const [spriteSide, setSpriteSide] = useState<SpriteSide>(SpriteSide.Front)

  const [spriteVariant, setSpriteVariant] = useState<SpriteVariant>(
    SpriteVariant.Default
  )

  return data !== null ? (
    <div className="grid grid-cols-3 justify-items-center">
      <select
        className="bg-black col-span-3 "
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
      <img
        className="object-cover pixelated w-full lg:col-span-1 col-span-3 max-w-[20vw]"
        src={resolveSpriteUrl(data.number, spriteSide, spriteVariant)}
      />
      <div className="flex flex-col col-span-2">
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
