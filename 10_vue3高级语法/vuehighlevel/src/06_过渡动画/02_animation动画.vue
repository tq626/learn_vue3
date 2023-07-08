<template>
  <div class="app">
    <!-- transition的本质就是添加class来完成动画的 -->
    <transition name="tq">
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

/* .v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
} */

.tq-enter-active {
  animation: tq 2s ease-in;
}
.tq-leave-active {
  animation: tqLeave 2s ease-in-out;
  /* animation: tq 2s ease-in reverse; */ 
  /* reverse: 表示反转 */
}

@keyframes tq {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes tqLeave {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>

