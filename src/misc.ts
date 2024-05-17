import { Ref } from "./rest.types"

export function apiUrlToLocal(apiUrl: string): string {
  return apiUrl.replace("https://pokeapi.co/api/v2", "")
}
export function apiRefToLocal(apiUrl: Ref): string {
  return apiUrlToLocal(apiUrl.url)
}
