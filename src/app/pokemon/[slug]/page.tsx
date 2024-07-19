"use client"
import KeyValueView from "@/app/components/KeyValueView"
import PokemonTypeDisplay from "@/app/components/PokemonTypeDisplay"
import { Pokemon } from "@/common/models"
import { useFetch } from "@mantine/hooks"
import { useParams } from "next/navigation"

export default function PokemonView() {
  const { slug } = useParams<{ slug: string }>()!
  const { data } = useFetch<Pokemon>("/api/" + slug)

  return data !== null ? (
    <div className="flex  flex-col lg:flex-row">
      <img
        className="object-cover pixelated max-h-[25vw]"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png`}
      />
      <div className="flex flex-col flex-1">
        <KeyValueView name="Name">{data!.name}</KeyValueView>
        <KeyValueView name="Types">
          <div className="w-full flex flex-row gap-5 justify-center lg:justify-start">
            {data.types.map((ty) => (
              <PokemonTypeDisplay key={ty} value={ty} />
            ))}
          </div>
        </KeyValueView>
        <KeyValueView name="Abilities">
          <div className="w-full flex flex-col lg:flex-row gap-5 justify-center lg:justify-start gap-5">
            {data.abilities.map((a) => (
              <div className="outline outline-1 px-1 flex-col">
                <div className="font-bold">{a.name}</div>
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
