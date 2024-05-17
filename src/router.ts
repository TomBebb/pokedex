import {
  createWebHistory,
  createRouter,
  RouteRecordSingleView,
  RouteRecord,
  RouteLocationNormalized,
} from "vue-router"
import { navItems } from "./nav"

const PokemonView = () => import("./views/PokemonView.vue")
const PokemonMoveView = () => import("./views/PokemonMove.vue")
const PokemonListView = () => import("./views/List.vue")

export interface MyRouteMeta {
  name: string
  visible: boolean
}
export const routes: (RouteRecordSingleView & { meta: MyRouteMeta })[] = [
  {
    path: "/list/:type",
    component: PokemonListView,
    meta: {
      name: "List",
      visible: true,
    },
  },
  {
    path: "/pokemon/:id",
    component: PokemonView,
    meta: {
      name: "Pokemon Viewer",
      visible: false,
    },
  },
  {
    path: "/move/:id",
    component: PokemonMoveView,
    meta: {
      name: "Pokemon Move Viewer",
      visible: false,
    },
  },
]
export function getRouteMeta(
  route: RouteRecord | RouteLocationNormalized
): MyRouteMeta {
  return route.meta as unknown as MyRouteMeta
}
export function getRouteName(
  route: RouteRecord | RouteLocationNormalized
): string {
  const navItem = navItems.find((ni) => ni.path === route.path)
  if (navItem) return navItem.name
  return getRouteMeta(route).name
}
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
