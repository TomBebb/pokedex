<script setup lang="ts">
defineProps<{ pageName: string }>()
</script>
<template>
    <header class="flex  flex-row top-0 sticky bg-gray-800 text-white px-2 py-1 gap-8 select-none h-[6vh] items-center">
        <div class="text-xl font-bold">
            {{ pageName }}
        </div>
        <div class="text-xl">
            -
        </div>
        <div class="text-xl">
            PokeDex
        </div>
    </header>
</template>