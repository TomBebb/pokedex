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
    class="flex cursor-pointer flex-row items-center gap-2 rounded-sm p-3 outline outline-1"
    @click="show = !show"
  >
    <div class="font-bold">{{ title }}</div>
    <Icon :icon="`fa-solid:${show ? 'minus' : 'plus'}`" />
  </button>

  <div :class="!show && 'hidden'">
    <slot />
  </div>
</template>
