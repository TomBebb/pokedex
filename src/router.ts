import {
  createWebHistory,
  createRouter,
  RouteRecordSingleView,
  RouteRecord,
  RouteLocationNormalized,
} from "vue-router"

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
  return getRouteMeta(route).name
}
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
