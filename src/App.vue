<script setup lang="ts">
import { RouterView } from "vue-router"
import MyHeader from "./components/MyHeader.vue"
import { getRouteName } from "./router"
</script>

<template>
  <div class="font-sans">
    <MyHeader :page-name="getRouteName($route)" />
    <RouterView />
  </div>
</template>
