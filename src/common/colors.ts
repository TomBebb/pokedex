import { PokemonType } from "@/common/models"

/** from https://www.epidemicjohto.com/t882-type-colors-hex-colors **/
export const typeHexColors: Record<PokemonType, string> = {
  [PokemonType.Normal]: "A8A77A",
  [PokemonType.Fire]: "EE8130",
  [PokemonType.Water]: "6390F0",
  [PokemonType.Electric]: "F7D02C",
  [PokemonType.Grass]: "7AC74C",
  [PokemonType.Ice]: "96D9D6",
  [PokemonType.Fighting]: "C22E28",
  [PokemonType.Poison]: "A33EA1",
  [PokemonType.Ground]: "E2BF65",
  [PokemonType.Flying]: "A98FF3",
  [PokemonType.Psychic]: "F95587",
  [PokemonType.Bug]: "A6B91A",
  [PokemonType.Rock]: "B6A136",
  [PokemonType.Ghost]: "735797",
  [PokemonType.Dragon]: "6F35FC",
  [PokemonType.Dark]: "705746",
  [PokemonType.Steel]: "B7B7CE",
  [PokemonType.Fairy]: "D685AD",
}

export const enum StyleColor {
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
}
