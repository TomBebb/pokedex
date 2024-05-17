<script lang="ts" setup>
import { useFetch } from "@vueuse/core"
import { PokemonData } from "../rest.types"

import { useRoute, RouterLink } from "vue-router"
const route = useRoute()
import Accordion from "../components/Accordion.vue"
import PokemonTypeDisplay from "../components/PokemonTypeDisplay.vue"
import { apiRefToLocal } from "../misc"
const { data } = useFetch(
  "https://pokeapi.co/api/v2/pokemon/" + route.params.id
).json<PokemonData>()
import * as changeCase from "change-case"
</script>

<template>
  <div class="flex flex-col">
    <div
      class="border-gray-700 bg-white top-[6vh] flex flex-col items-center border-b-2 pl-3 lg:sticky lg:flex-row z-10 h-[6vh]">
      <img :src="data?.sprites?.back_default" />

      <div class="text-2xl font-bold">
        {{ changeCase.capitalCase(data?.name ?? "") }}
      </div>

      <div class="lg:w-full" />
      <div class="lg:min-w-40">
        <span class="font-semibold"> Height: </span>
        {{ data?.height }}
      </div>
      <div class="lg:min-w-40">
        <span class="font-semibold"> Weight: </span>
        {{ data?.weight }}
      </div>
      <div class="flex flex-row">
        <PokemonTypeDisplay :type="ty.type.name" v-for="ty in data?.types" />
      </div>
    </div>
    <Accordion title="Abilities">
      <div class="flex flex-col gap-2 p-3">
        <div class v-for="ability in data?.abilities">
          {{ changeCase.capitalCase(ability.ability.name) }}
        </div>
      </div>
    </Accordion>
    <Accordion title="Games">
      <div class="flex flex-col gap-2 p-3">
        <div class v-for="game in data?.game_indices">
          {{ changeCase.capitalCase(game.version.name) }}
        </div>
      </div>
    </Accordion>

    <Accordion title="Moves">
      <div class="flex flex-col gap-2 p-3">
        <div class v-for="move in data?.moves">
          <RouterLink :to="apiRefToLocal(move.move)">
            {{ changeCase.capitalCase(move.move.name) }}
          </RouterLink>
        </div>
      </div>
    </Accordion>
  </div>
</template>
