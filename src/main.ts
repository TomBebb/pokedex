import { createApp } from "vue"
import "./index.css"
import App from "./App.vue"
import { router, getRouteName } from "./router"

createApp(App).use(router).mount("#app")
router.beforeEach((to) => {
  document.title = getRouteName(to as any) + " - PokeDex"
})
