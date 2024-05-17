<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{ pageName: string }>()
</script>
<template>
  <header class="sticky top-0 flex h-[6vh] select-none flex-row items-center gap-8 bg-gray-800 px-2 py-1 text-white">
    <RouterLink to="/" class="text-xl">PokeDex</RouterLink>
    <div class="text-xl font-bold">
      {{ pageName }}
    </div>
  </header>
</template>
