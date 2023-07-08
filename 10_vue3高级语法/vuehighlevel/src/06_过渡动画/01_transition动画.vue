<template>
  <div class="app">
    <!-- transition的本质就是添加class来完成动画的 -->
    <transition>
      <h2 v-if="isShow">你好, 李银河</h2>
    </transition>
    
    <button @click="handerShow">是否显示</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let isShow = ref(true)
const handerShow = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active, 
.v-leave-active {
  transition: opacity 2s ease;
}
</style>

