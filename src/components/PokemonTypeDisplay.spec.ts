import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import PokemonTypeDisplay from "./PokemonTypeDisplay.vue"

test("PokemonTypeDisplay(fire) text = 'FIRE'", () => {
  const wrapper = mount(PokemonTypeDisplay, {
    props: { type: "fire" },
  })
  expect(wrapper.text()).eq("FIRE")
})

test("PokemonTypeDisplay(fire) bgColor = '#EE8130'", () => {
  const wrapper = mount(PokemonTypeDisplay, {
    props: { type: "fire" },
  })
  expect(wrapper.html()).includes("background-color: #EE8130")
})
