<script setup lang="ts">
import { ref } from "vue";
import { navItemsByCat, navCategories, NavCategory, } from "../nav.ts"
cons
</script>
<template>
    <div class="flex-col lg:flex-row flex gap-5 text-lg  justify-end">

        <div v-for="(navItems, navKey) in navItemsByCat " class="group">

            <button class="p-2 outline outline-2 rounded hover:outline-4 transition ">
                {{ navCategories[navKey] }}
            </button>
            <div
                class="hidden group-hover:flex absolute top-[100%] flex-col bg-primary-content text-primary outline outline-primary p-2 rounded-sm">
                <RouterLink v-for="item in navItems" :to="item.path">
                    {{ item.name }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>