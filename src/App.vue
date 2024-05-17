<script setup lang="ts">
import { RouterView } from "vue-router"
import MyHeader from "./components/MyHeader.vue"
import { getRouteName } from "./router"
import { Icon } from "@iconify/vue"
</script>

<template>
  <div class="fixed bottom-0 right-0 text-3xl p-1 flex flex-row">
    <a href="https://github.com/TomBebb/pokedex">
      <Icon icon="fa-brands:github" />
    </a>
  </div>
  <div class="font-sans">
    <MyHeader :page-name="getRouteName($route)" />
    <RouterView />
  </div>
</template>
