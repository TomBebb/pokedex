<script setup lang="ts">
import { RouterLink } from "vue-router"
import NavBar from "./NavBar.vue"
defineProps<{ pageName: string }>()
</script>
<template>
  <header
    class="bg-gray-800 border-b-2 border-primary text-white sticky top-0 flex h-[6vh] select-none flex-row items-center gap-8 px-2 py-1">
    <RouterLink to="/" class="text-xl">PokeDex</RouterLink>
    <div class="text-xl font-bold">
      {{ pageName }}
    </div>
    <NavBar class="ml-auto flex-1" />
  </header>
</template>
