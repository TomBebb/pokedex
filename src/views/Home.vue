<script setup lang="ts">
import { navItems } from "../nav.ts"

import { RouterLink } from "vue-router"
</script>

<template>

    <div class="grid lg:grid-cols-3 gap-8 p-8">


        <RouterLink v-for="item in navItems" :to="item.path"
            class="flex items-center flex-col border-2 rounded-lg gap-8 p-4">
            <div class="text-2xl ">
                {{ item.name }}
            </div>
            <div class="text-xl text-ellipsis">
                {{ item.desc }}
            </div>
        </RouterLink>
    </div>
</template>
