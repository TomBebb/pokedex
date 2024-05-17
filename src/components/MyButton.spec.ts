import MyButton from "./MyButton.vue"

import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { MyStyle } from "../styles"
test("button has content", () => {
  const wrapper = mount(MyButton, { slots: { default: "Hello, world!" } })
  expect(wrapper.text()).eq("Hello, world!")
})

test("button has icon", () => {
  const wrapper = mount(MyButton, { attrs: { icon: "demo" } })
  expect(wrapper.html()).includes("<svg")
})

test("button has error theme", () => {
  const wrapper = mount(MyButton, {
    attrs: { theme: "error" satisfies MyStyle },
  })
  console.log(wrapper.html())

  expect(wrapper.html()).includes("text-error")
  expect(wrapper.html()).includes("bg-error")
})
