import MyHeader from "./MyHeader.vue"
import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import { router, routes } from "../router"
test("myheader has pageName hello world", () => {
  const wrapper = mount(MyHeader, {
    props: { pageName: "Hello, world!" },
    global: {
      plugins: [router],
    },
  })
  expect(wrapper.html()).includes("Hello, world!")
})
