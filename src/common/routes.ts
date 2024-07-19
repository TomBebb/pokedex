export interface Route {
  name: string
  path: string | RegExp
  description?: string
  hidden?: boolean
  icon?: {
    active: string
    inactive: string
  }
}
export function routePathMatch(
  curr: string,
  routePath: Route["path"]
): boolean {
  let matches: boolean
  if (typeof routePath === "string") {
    matches = routePath === curr
  } else {
    matches = routePath.test(curr)
    console.debug("routePathMatch regex", { curr, routePath, matches })
  }
  return matches
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
    description: "List all the Pokemon available",
  },
  {
    hidden: true,
    name: "Pokemon",
    path: /^\/pokemon\/[0-9]+$/gm,
    icon: outlinedAntIcon("ordered-list"),
  },
]
export function findMatchingRoute(pathname: string): Route | undefined {
  console.info("findMatchingRoute", { pathname, exact: true })
  return routes.find((route) => routePathMatch(pathname, route.path))
}
