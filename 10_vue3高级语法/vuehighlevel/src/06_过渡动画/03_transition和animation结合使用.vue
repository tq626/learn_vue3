<template>
  <div class="app">
    <!-- transition的本质就是添加class来完成动画的 -->
    <transition name="tq" >
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

.tq-enter-from,
.tq-leave-to {
  opacity: 0;
}

.tq-enter-to,
.tq-leave-from {
  opacity: 1;
}

.tq-enter-active {
  animation: tq 2s ease-in;
  transition: opacity 2s ease;
}
.tq-leave-active {
  animation: tqLeave 2s ease-in-out;
  transition: opacity 2s ease;
}

@keyframes tq {
  0% {
    transform: scale(0);
    
  }

  50% {
    transform: scale(1.2);
    
  }

  100% {
    transform: scale(1);
    
  }
}

@keyframes tqLeave {
  0% {
    transform: scale(1);
    
  }

  50% {
    transform: scale(1.2);
    
  }

  100% {
    transform: scale(1);
    
  }
}
</style>

