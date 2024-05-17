<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { ref } from "vue"
const show = ref(true)
defineProps<{
  title: string
}>()
</script>

<template>
  <button
    class="flex cursor-pointer flex-row items-center gap-2 rounded-sm p-3 outline outline-1 top-[12vh] z-20 sticky bg-white"
    @click="show = !show">
    <Icon :icon="`fa-solid:${show ? 'minus' : 'plus'}`" />
    <div class="font-bold">{{ title }}</div>
  </button>

  <div :class="show ? 'max-h-[100vh]' : 'max-h-0'" class="overflow-hidden transition-all">
    <slot />
  </div>
</template>
