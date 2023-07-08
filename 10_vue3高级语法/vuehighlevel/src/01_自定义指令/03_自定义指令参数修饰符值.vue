<template>
  <div class="app">
    <!-- <input type="text" ref="inputRef"> -->
    <!-- 参数-修饰符-值 -->
    <h2 v-tq:kobe.nba="message">当前计数: {{count}}</h2>
    <button  @click="count++">+1</button>
    <h2 v-unit>222</h2>
  </div> 
  
</template>

<script setup>
import { ref } from "vue" 
const count = ref(0)
const message = '你好啊, 李银河'
const vTq = {
  mounted(el, bindings) {
    // console.log("mounted~")
    console.log(el, bindings)
    el.textContent = bindings.value
  },
  
}
</script>

<style>

</style>
