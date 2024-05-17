<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from "vue"
const show = ref(true)
defineProps<{
    title: string
}>()
</script>

<template>
    <button class="flex flex-row gap-2 items-center outline outline-1 rounded-sm p-3 cursor-pointer"
        @click="show = !show">
        <div class="font-bold">{{ title }}</div>
        <Icon :icon="`fa-solid:${show ? 'minus' : 'plus'}`" />

    </button>

    <div :class="!show && 'hidden'">
        <slot />
    </div>

</template>