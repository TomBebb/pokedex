<script lang="ts" setup>
import { useFetch } from "@vueuse/core"
import { PokemonMoveData } from "../rest.types"

import { useRoute, RouterLink } from "vue-router"
const route = useRoute()
import Accordion from "../components/Accordion.vue"
import PokemonTypeDisplay from "../components/PokemonTypeDisplay.vue"

const { data } = useFetch(
  "https://pokeapi.co/api/v2/move/" + route.params.id
).json<PokemonMoveData>()
import * as changeCase from "change-case"
import { apiRefToLocal } from "../misc"
import { computed } from "vue"

const matchingEffect = computed(() =>
  data?.value?.effect_entries.find((e) => e.language.name === "en")
)
</script>

<template>
  <div class="flex flex-col">
    <div
      class="border-gray-700 bg-white sticky top-[6vh] flex flex-col items-center border-b-2 pl-3 lg:flex-row"
    >
      <div class="text-2xl font-bold lg:w-[40vw]">
        {{ changeCase.capitalCase(data?.name ?? "") }}
      </div>

      <div class="w-full">
        {{ matchingEffect?.short_effect }}
      </div>

      <div class="lg:min-w-40">
        <span class="font-semibold"> PP: </span>
        {{ data?.pp }}
      </div>
      <PokemonTypeDisplay :type="data?.type.name ?? ''" />
    </div>

    <div class="w-full px-3">
      {{ matchingEffect?.effect }}
    </div>
    <Accordion title="Learned By">
      <div class="flex w-full flex-col gap-2 px-3">
        <RouterLink
          v-for="item in data?.learned_by_pokemon ?? []"
          :to="apiRefToLocal(item)"
        >
          {{ changeCase.capitalCase(item.name) }}
        </RouterLink>
      </div>
    </Accordion>
  </div>
</template>
