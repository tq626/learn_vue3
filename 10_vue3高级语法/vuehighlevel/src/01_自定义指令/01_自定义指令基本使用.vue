<template>
  <div class="app">
    <!-- <input type="text" ref="inputRef"> -->
    <input type="text" v-focus>
  </div>
  
</template>

<script>
  // export default {
  //   directives:{
  //     focus:{
  //       // 生命周期的函数(自定义指令)
  //       mounted(el) {
  //         // console.log(el)
  //         el?.focus()
  //       },
  //     }
  //   }
  // }
</script>


<script setup>
// 方式一: 定义ref绑定input中调用focus
// import useInput from "./hook/onFocus"
// const { inputRef } = useInput()

// 方式三:自定义指令(局部)
// import { onMounted } from 'vue';
// const vFocus = {
//   mounted(el){
//     el?.focus()
//   },
// }
</script>

<style>

</style>
