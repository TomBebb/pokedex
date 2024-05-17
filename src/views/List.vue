<script lang="ts" setup>
import { useFetch } from "@vueuse/core"
import { PaginatedResult } from "../rest.types"

import { RouterLink } from "vue-router"
import { Icon } from "@iconify/vue"
import { apiRefToLocal } from "../misc"
import * as changeCase from "change-case"
import { useRouteParams, useRouteQuery } from "@vueuse/router"
import { computed } from "vue"

import MyButton from "../components/MyButton.vue"
const type = useRouteParams("type")

const offset = useRouteQuery("offset", 0, { transform: Number })
const limit = useRouteQuery("limit", 25, { transform: Number })
const fetchUrl = computed(
  () =>
    `https://pokeapi.co/api/v2/${type.value}/?offset=${encodeURIComponent(offset.value)}&limit=${encodeURIComponent(limit.value)}`
)
const { data, isFinished, isFetching } = useFetch(fetchUrl, {
  refetch: true,
}).json<PaginatedResult>()

const totalPages = computed(() =>
  Math.ceil((data.value?.count ?? 0) / limit.value)
)
const pageIndex = computed({
  get: () => Math.floor(offset.value / limit.value),
  set: (v) => {
    offset.value = v * limit.value
  },
})
const pageNumber = computed({
  get: () => pageIndex.value + 1,
  set: (v) => (pageIndex.value = v - 1),
})
function nextPage() {
  console.log("nex")
  pageIndex.value++
}
function prevPage() {
  pageIndex.value--
}
</script>

<template>
  <div class="flex flex-col">
    <Icon icon="fa-solid:spinner" class="absolute left-1/2 top-1/2 animate-spin" v-if="isFetching" />
    <div class="border-gray-700 bg-white top-[6vh] flex min-h-10 flex-row items-center gap-2 border-b-2 pl-3"
      :class="{ invisible: !isFinished }">
      <div>Page {{ pageNumber }} of {{ totalPages }}</div>

      <MyButton icon="fa6-solid:angles-left" theme="secondary" :disabled="pageIndex <= 0" @click="prevPage">
        Prev
      </MyButton>

      <MyButton icon="fa6-solid:angles-right" theme="primary" :disabled="pageIndex >= totalPages - 1" @click="nextPage">
        Next
      </MyButton>
    </div>

    <RouterLink v-for="item in data?.results ?? []" :to="apiRefToLocal(item)">
      {{ changeCase.capitalCase(item.name) }}
    </RouterLink>
  </div>
</template>
