<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { navItemsByCat, navCategories, NavCategory, } from "../nav.ts"

const me = ref<HTMLDivElement>()
const expandedCat = ref<NavCategory>()
function onClickHandler(event: MouseEvent) {

    const withinBoundaries = event.composedPath().includes(me.value!)
    if (!withinBoundaries) {
        expandedCat.value = undefined
    }
}
onMounted(() => document.addEventListener('click', onClickHandler))
onUnmounted(() => document.removeEventListener('click', onClickHandler))
</script>
<template>
    <div ref="me" class="flex-col lg:flex-row flex gap-5 text-lg  justify-end">

        <div v-for="(navItems, navKey) in navItemsByCat ">

            <button class=" p-2 outline outline-2 rounded hover:outline-4 transition " @click="expandedCat = navKey">
                {{ navCategories[navKey] }}
            </button>
            <div v-if="expandedCat === navKey" class="flex  group-hover:flex absolute top-[100%] flex-col bg-primary-content text-primary outline
            outline-primary p-2 rounded-sm">
                <RouterLink v-for="item in navItems" :to="item.path" @click="expandedCat = undefined">
                    {{ item.name }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>