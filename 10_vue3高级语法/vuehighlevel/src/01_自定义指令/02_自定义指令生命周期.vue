<template>
  <div class="app">
    <!-- <input type="text" ref="inputRef"> -->
    <h2 v-if="isShow" v-tq>当前计数: {{count}}</h2>
    <button  @click="count++">+1</button>
    <button @click="isShow = false">隐藏</button>
  </div> 
  
</template>

<script setup>
import { ref } from "vue" 
const count = ref(0)
const isShow = ref(true)
const handerIsShow = () => {
  isShow = !isShow
}
const vTq = {
  created() {
    console.log("created~")
  },
  beforeMount() {
    console.log("beforeMount~")
  },
  mounted() {
    console.log("mounted~")
  },
  beforeUpdate() {
    console.log("beforeUpdate~")
  },
  updated() {
    console.log("update~")
  },
  beforeUnmount() {
    console.log("beforeUnmount~")
  },
  unmounted() {
    console.log("unmounted~")
  },
}
</script>

<style>

</style>
