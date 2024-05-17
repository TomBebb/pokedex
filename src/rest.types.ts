export interface PaginatedResult {
  count: number
  next?: string
  previous?: string

  results: NamedRef[]
}
export interface Ref {
  url: string
}

export interface NamedRef {
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
    ability: NamedRef
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  cries: Record<"latest" | "legacy", string>
  forms: NamedRef[]
  game_indices: {
    game_index: number
    version: NamedRef
  }[]
  height: number
  held_items: {
    item: NamedRef
    version_details: {
      rarity: number
      version: NamedRef
    }[]
  }[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: {
    move: NamedRef
    version_group_details: {
      level_learned_at: number
      move_learn_method: NamedRef
      version_group: NamedRef
    }[]
  }[]
  name: string
  order: number
  species: NamedRef
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
    stat: NamedRef
  }[]
  types: { slot: number; type: NamedRef }[]
  weight: number
}

export interface PokemonMoveData {
  accuracy: number
  name: string
  contest_effect: Ref
  contest_type: NamedRef
  damage_class: string
  effect_entries: [
    {
      effect: string
      short_effect: string
      language: NamedRef
    },
  ]

  learned_by_pokemon: NamedRef[]
  generation: NamedRef
  flavor_text_entries: [
    {
      flavor_text: string
      language: NamedRef
      version_group: NamedRef
    },
  ]
  machines: {
    machine: Ref
    version_group: NamedRef
  }[]
  power: number
  pp: number
  priority: number

  type: NamedRef
}
