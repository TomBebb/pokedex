<script lang="ts" setup>
import { useFetch } from "@vueuse/core"
import { PokemonData } from "../rest.types"

import { useRoute } from "vue-router"
const route = useRoute()
import Accordion from "../components/Accordion.vue"

const { data } = useFetch(
  "https://pokeapi.co/api/v2/pokemon/" + route.params.id
).json<PokemonData>()
import * as changeCase from "change-case";

</script>

<template>
  <div class="flex flex-col">
    <div class="font-bold text-2xl sticky top-[6vh] bg-white border-b-2 border-gray-700">

      {{ changeCase.capitalCase(data?.name ?? '') }}
    </div>
    <Accordion title="Physical">
      <div class="flex gap-10">
        <div>
          <span class="font-semibold">
            Height:
          </span>
          {{ data?.height }}
        </div>
        <div>
          <span class="font-semibold">
            Weight:
          </span>
          {{ data?.weight }}
        </div>
      </div>
    </Accordion>
    <Accordion title="Abilities">
      <div class="flex flex-col gap-2">
        <div class v-for="ability in data?.abilities">
          {{ changeCase.capitalCase(ability.ability.name) }}
        </div>
      </div>
    </Accordion>
    <Accordion title="Games">
      <div class="flex flex-col gap-2">
        <div class v-for="game in data?.game_indices">
          {{ changeCase.capitalCase(game.version.name) }}
        </div>
      </div>
    </Accordion>

    <Accordion title="Moves">
      <div class="flex flex-col gap-2">
        <div class v-for="move in data?.moves">
          {{ changeCase.capitalCase(move.move.name) }}
        </div>
      </div>
    </Accordion>
    <Accordion title="Types">
      <div class="flex flex-col gap-2">
        <div class v-for="type in data?.types">
          {{ (type.type.name).toUpperCase() }}
        </div>
      </div>
    </Accordion>

  </div>
</template>