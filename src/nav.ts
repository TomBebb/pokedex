export const navCategoryNames = {
  berries: "Berries",
  contests: "Contests",
  encounters: "Encounters",
  evolutions: "Evolutions",
  games: "Games",
  items: "Items",
  locations: "Locations",
  machines: "Machines",
  moves: "Machines",
  pokemon: "Pokémon",
}

export const navCategories = Object.keys(navCategoryNames) as NavCategory[]
export type NavCategory = keyof typeof navCategoryNames

export interface NavItem {
  name: string
  path: string
  desc: string
  category: NavCategory
}

export const navItems: NavItem[] = [
  {
    path: "/list/item",
    name: "Items",
    desc: "View a listing of all items",
    category: "items",
  },
  {
    path: "/list/item-category",
    name: "Item Categories",
    desc: "View a listing of all item categories",
    category: "items",
  },
  {
    path: "/list/berry",
    name: "Berries",
    desc: "View a listing of all berrys",
    category: "berries",
  },
  {
    path: "/list/pokemon",
    name: "Pokémon",
    desc: "View a listing of all Pokemon",
    category: "pokemon",
  },
  {
    path: "/list/move",
    name: "Moves",
    desc: "View a listing of all Pokemon moves",
    category: "moves",
  },
  {
    path: "/list/generation",
    name: "Generations",
    desc: "View a listing of all Pokemon game generations",
    category: "games",
  },
  {
    path: "/list/version",
    name: "Pokemon Games",
    desc: "View a listing of all Pokemon games",
    category: "games",
  },
  {
    path: "/list/machines",
    name: "Pokemon Machines",
    desc: "View a listing of all Pokemon machines: TMs, HMs etc",
    category: "machines",
  },
]
export const navItemsByCat: Record<NavCategory, NavItem[]> = Object.fromEntries(
  navCategories
    .map((cat) => [cat, navItems.filter((ni) => ni.category === cat)])
    .filter(([_k, v]) => v.length)
)
