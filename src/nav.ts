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
    path: "/list/version",
    name: "Pokemon Games",
    desc: "View a listing of all Pokemon games",
  },
]
