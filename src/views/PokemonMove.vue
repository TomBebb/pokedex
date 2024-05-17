<script lang="ts" setup>
import { useFetch } from "@vueuse/core"
import { PokemonMoveData } from "../rest.types"

import { useRoute } from "vue-router"
const route = useRoute()
import Accordion from "../components/Accordion.vue"
import PokemonTypeDisplay from "../components/PokemonTypeDisplay.vue"

const { data } = useFetch(
  "https://pokeapi.co/api/v2/move/" + route.params.id
).json<PokemonMoveData>()
import * as changeCase from "change-case";
import { computed } from "vue";

const matchingEffect = computed(() => data?.value?.effect_entries.find(e => e.language.name === 'en'))
</script>

<template>
  <div class="flex flex-col">
    <div class="sticky pl-3 top-[6vh] bg-white border-b-2 border-gray-700 flex flex-col lg:flex-row items-center">


      <div class="font-bold text-2xl  lg:w-[40vw]">
        {{ changeCase.capitalCase(data?.name ?? '') }}
      </div>

      <div class="w-full ">
        {{ matchingEffect?.short_effect }}
      </div>

      <div class="lg:min-w-40">
        <span class="font-semibold">
          PP:
        </span>
        {{ data?.pp }}
      </div>
      <PokemonTypeDisplay :type="data.type.name" />
    </div>

  </div>
</template>