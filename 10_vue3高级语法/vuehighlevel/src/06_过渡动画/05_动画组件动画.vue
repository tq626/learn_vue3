<template>
  <div class="app">
    <!-- transition的本质就是添加class来完成动画的 -->
    <!-- mode属性:让有动画的元素按照先后顺序来执行 -->
    <transition name="tq" mode="out-in">
      <component :is="isShow ? 'About' : 'Home'"></component> 
    </transition>
    
    <button @click="handerShow">是否显示</button>
  </div>
</template>

<script>

  import About from './view/About.vue'
  import Home from './view/Home.vue'
  export default {
    components: {
      About,
      Home
    }
  }
</script>

<script setup>
import { ref } from 'vue'
// import About from './view/About.vue'
// import Home from './view/Home.vue'

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

