<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { navItemsByCat, navCategoryNames, NavCategory, NavItem, } from "../nav.ts"
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useRouter } from "vue-router";
import { styleClass } from "../styles.ts";
const me = ref<HTMLDivElement>()
const expandedCat = ref<NavCategory>()
const showMenu = ref<boolean>(false)

function onClickHandler(event: MouseEvent) {
    const withinBoundaries = event.composedPath().includes(me.value!)
    if (!withinBoundaries) {
        expandedCat.value = undefined
    }
}
onMounted(() => document.addEventListener('click', onClickHandler))
onUnmounted(() => document.removeEventListener('click', onClickHandler))

function toggleMenu() {
    showMenu.value = !showMenu.value
}

function closeMenu() {
    showMenu.value = false
    expandedCat.value = undefined

}
const router = useRouter()
router.beforeEach((r) => {
    console.info("Router before", r)
    closeMenu()
})


function isCurr(nav: NavItem) {
    return router.currentRoute.value.fullPath.startsWith(nav.path)
}


</script>
<template>
    <button class="lg:hidden block ml-auto text-2xl" @click="toggleMenu">
        <Icon icon="fa6-solid:bars" />
        <div v-if="showMenu" class="flex  group-hover:flex fixed top-[6vh] right-[10vw] flex-col opacity-90  bg-primary-content text-primary outline
            outline-primary p-2 rounded-sm  w-[80vw] text-center gap-8 z-[100]">
            <template v-for="(navItems, cat) in navItemsByCat ">
                <div class="text-2xl border-b-2 border-secondary">
                    {{ navCategoryNames[cat] }}
                </div>

                <RouterLink v-for="item in navItems" :to="item.path" class="text-xl">
                    {{ item.name }}
                </RouterLink>
            </template>
        </div>
    </button>
    <div ref="me" class="hidden lg:flex flex-row  gap-5 text-lg justify-end ml-auto ">

        <div v-for="(navItems, navKey) in navItemsByCat">
            <RouterLink v-if="navItems.length === 1" :to="navItems[0].path">
                <div class="p-2 outline outline-2 rounded hover:outline-4 transition"
                    :class="isCurr(navItems[0]) && styleClass('primary')">

                    {{ navItems[0].name }}
                </div>
            </RouterLink>
            <template v-else>

                <button class="p-2 outline outline-2 rounded hover:outline-4 transition"
                    :class="navItems.find(isCurr) && styleClass('primary')"
                    @click="expandedCat = expandedCat === navKey ? undefined : navKey">
                    {{ navCategoryNames[navKey] }}
                </button>
                <div v-if="expandedCat === navKey" class="flex group-hover:flex absolute top-[100%] flex-col bg-primary-content text-primary 
         rounded-sm z-[100]">
                    <RouterLink v-for="item in navItems" :to="item.path"
                        class="hover:outline-4 outline-2 outline px-2 py-1 rounded-sm"
                        :class="isCurr(item) && styleClass('primary')">
                        {{ item.name }}
                    </RouterLink>
                </div>
            </template>
        </div>
    </div>
</template>