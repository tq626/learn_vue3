<template>
  <div class="app">
    <h2 v-ftime>{{ timestamp }}</h2>
    <h2 v-ftime="'YYYY/MM/DD'">{{ 1897627987272 }}</h2>
  </div> 
  
</template>

<script setup>
import { ref } from "vue" 
const timestamp = ref(1209872626)

</script>

<style>

</style>
