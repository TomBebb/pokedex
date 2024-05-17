<script setup lang="ts">
import { MyStyle } from "../styles"

import { Icon } from "@iconify/vue"
defineProps<{ theme?: MyStyle, icon?: string }>()
</script>
<template>
    <button
        class=" flex flex-row items-center gap-2 rounded-lg border-2 px-3 py-1 disabled:bg-error disabled:text-error-content disabled:opacity-80"
        :class="`bg-${theme ?? 'primary'} text-${theme ?? 'primary'}-content border-${theme ?? 'primary'}-content`"
        v-bind="$attrs">
        <Icon v-if="icon" :icon="icon" />
        <slot />
    </button>
</template>
