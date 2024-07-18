export interface Route {
  name: string
  path: string
}

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pokemon",
    path: "/paginated",
  },
]
