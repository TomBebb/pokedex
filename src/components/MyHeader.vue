<script setup lang="ts">
defineProps<{ pageName: string }>()
</script>
<template>
  <header
    class="sticky top-0 flex h-[6vh] select-none flex-row items-center gap-8 bg-gray-800 px-2 py-1 text-white"
  >
    <div class="text-xl font-bold">
      {{ pageName }}
    </div>
    <div class="text-xl">-</div>
    <div class="text-xl">PokeDex</div>
  </header>
</template>
