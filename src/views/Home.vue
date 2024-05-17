<script setup lang="ts">
import { navItems } from "../nav.ts"

import { RouterLink } from "vue-router"
</script>

<template>
  <div class="grid gap-8 p-8 lg:grid-cols-3">
    <RouterLink v-for="item in navItems" :to="item.path"
      class="flex flex-col items-center gap-8 rounded-lg border-2 p-4">
      <div class="text-2xl">
        {{ item.name }}
      </div>
      <div class="text-ellipsis text-center text-xl">
        {{ item.desc }}
      </div>
    </RouterLink>
  </div>
</template>
