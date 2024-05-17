export interface PaginatedResult<TItem> {
  count: number
  next?: string
  previous?: string

  results: TItem[]
}

export interface BasicPageData {
  name: string
  url: string
}

type SpriteGender = "male" | "female"
type SpriteSide = "front" | "back"

type SpriteKind =
  `${SpriteSide}_${"default" | "shiny" | SpriteGender | `shiny_${SpriteGender}`}`
type BaseSpriteMap = Partial<Record<SpriteKind, string>>
export interface PokemonData {
  abilities: {
    ability: BasicPageData
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  cries: Record<"latest" | "legacy", string>
  forms: BasicPageData[]
  game_indices: {
    game_index: number
    version: BasicPageData
  }[]
  height: number
  held_items: {
    item: BasicPageData
    version_details: {
      rarity: number
      version: BasicPageData
    }[]
  }[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: {
    move: BasicPageData
    version_group_details: {
      level_learned_at: number
      move_learn_method: BasicPageData
      version_group: BasicPageData
    }[]
  }[]
  name: string
  order: number
  species: BasicPageData
  sprites: BaseSpriteMap & {
    other: {
      dream_world: BaseSpriteMap
      home: BaseSpriteMap
      showdown: BaseSpriteMap
      ["official-artwork"]: BaseSpriteMap
    }
  }
  stats: {
    base_stat: number
    effort: number
    stat: BasicPageData
  }[]
  types: { slot: number; type: BasicPageData }[]
  weight: number
}

export interface PokemonMove {
  accuracy: number
  name: string
  contest_effect: { url: string }
  contest_type: BasicPageData
  damage_class: string

  learned_by_pokemon: BasicPageData[]
  generation: BasicPageData
  flavor_text_entries: [
    {
      flavor_text: string
      language: BasicPageData
      version_group: BasicPageData
    },
  ]
  power: number
  pp: number

  type: BasicPageData
}
