export interface Route {
  name: string
  path: string
  icon?: {
    active: string
    inactive: string
  }
}

function antIcon(name: string): Route["icon"] {
  return {
    active: `ant-design:${name}-filled`,
    inactive: `ant-design:${name}-outlined`,
  }
}

function outlinedAntIcon(name: string): Route["icon"] {
  const icon = `ant-design:${name}-outlined`
  return {
    active: icon,
    inactive: icon,
  }
}

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: antIcon("home"),
  },
  {
    name: "List Pokemon",
    path: "/paginated",
    icon: outlinedAntIcon("ordered-list"),
  },
]
