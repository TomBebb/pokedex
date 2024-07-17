export interface Pokemon {
  types: PokemonType[]
  name: string
  species: string
  number: string
  gen: string
  baseStats: PokemonStats
  weight: string
  height: string
  mega: boolean
}
export enum PokemonType {
  Normal = "Normal",
  Flying = "Flying",
  Fire = "Fire",
  Psychic = "Psychic",
  Water = "Water",
  Bug = "Bug",
  Electric = "Electric",
  Rock = "Rock",
  Grass = "Grass",
  Ghost = "Ghost",
  Ice = "Ice",
  Dragon = "Dragon",
  Fighting = "Fighting",
  Dark = "Dark",
  Poison = "Poison",
  Steel = "Steel",
  Ground = "Ground",
  Fairy = "Fairy",
}
export interface PokemonAbility {
  name: string
  description: string
  hidden: boolean
}

export interface PokemonStats {
  hp: number
  attack: number
  defense: number
  spAtk: number
  spDef: number
  speed: number
}
export interface PaginatedQuery {
  limit: number
  offset: number
}
export interface Paginated<T> extends PaginatedQuery {
  items: T[]
  total: number
}
export interface ValueWrapper<T> {
  value: T
}
