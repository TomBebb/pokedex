import { test, expect } from "vitest"
import { apiUrlToLocal } from "./misc"

test("apiUrlToLocal('/pokemon/1')", () => {
  expect(apiUrlToLocal("https://pokeapi.co/api/v2/pokemon/1")).eq("/pokemon/1")
})
