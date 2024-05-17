export type 
export interface NavItem {
  name: string
  path: string
  desc: string
}

export const navItems: NavItem[] = [
  {
    path: "/list/pokemon",
    name: "Pokemon",
    desc: "View a listing of all Pokemon",
  },
  {
    path: "/list/move",
    name: "Pokemon Moves",
    desc: "View a listing of all Pokemon moves",
  },
  {
    path: "/list/version",
    name: "Pokemon Games",
    desc: "View a listing of all Pokemon games",
  },
  {
    path: "/list/machines",
    name: "Pokemon Machines",
    desc: "View a listing of all Pokemon machines: TMs, HMs etc",
  },
]
