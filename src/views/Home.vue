<script setup lang="ts">
import { navItemsByCat, navCategories, navItems as allNavItems } from "../nav.ts"
import { mainStyles, styleClass } from "../styles.ts"
import { RouterLink } from "vue-router"

function resolveMainStyle(index: number): string {
  return styleClass(mainStyles[index % mainStyles.length])
}
</script>

<template>
  <div class="flex flex-col  p-8 gap-2">
    <div v-for="(navItems, navKey) in navItemsByCat ">
      <div class="text-2xl font-bold text-center">
        {{ navCategories[navKey] }}
      </div>
      <div class="grid gap-8 lg:grid-cols-3">
        <RouterLink v-for="(item) in navItems" :to="item.path"
          class="flex flex-col items-center gap-8 rounded-lg outline outline-gray outline-4 p-4 transition-all hover:outline-8 group"
          :class="resolveMainStyle(allNavItems.indexOf(item))">
          <div class="text-2xl font-semibold group-hover:scale-125 transition-transform">
            {{ item.name }}
          </div>
          <div class="w-full border-2 opacity-5"></div>
          <div class="text-ellipsis text-center text-xl flex-1">
            {{ item.desc }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
