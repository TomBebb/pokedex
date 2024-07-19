"use client"
import { usePathname } from "next/navigation"

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
  return typeof routePath === "string"
    ? routePath === curr
    : routePath.test(curr)
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
export function useActiveRoute(): Route | undefined {
  const pathname = usePathname() ?? ""
  return routes.find((route) => routePathMatch(pathname, route.path))
}
