import { createWebHistory, createRouter, RouteRecordSingleView, RouteRecord } from "vue-router"

import PokemonView from "./views/PokemonView.vue"

export interface MyRouteMeta {
  name: string
  visible: boolean
}
export const routes: (RouteRecordSingleView & {meta: MyRouteMeta})[] = [{ path: "/pokemon/:id", component: PokemonView, meta: {
  name: "Pokemon Viewer",
  visible: false
}}]
export function getRouteMeta(route: RouteRecord): MyRouteMeta {
  return route.meta as unknown as MyRouteMeta
}
export function getRouteName(route: RouteRecord): string {
  return getRouteMeta(route).name
}
export const router = createRouter({
  history: createWebHistory(),
  routes
})
