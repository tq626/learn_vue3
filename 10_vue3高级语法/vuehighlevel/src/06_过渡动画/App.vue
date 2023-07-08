<template>
  <div class="app">
    <button @click="addNumber">添加数字</button>
    <button @click="removeNumber">删除数字</button>
    
      <transition-group tag="div" name="tq">
        <template v-for="(item, index) in nums" :key="index">
          <span>{{ item }}</span>
        </template>
      </transition-group>
   
  </div>
</template>


<script setup>
import { reactive } from 'vue'

const nums = reactive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

const addNumber = () => {
  
  nums.splice(randomIndex(), 0, nums.length)
}

const removeNumber = () => {
  console.log(randomIndex())
  nums.splice(randomIndex(), 1)
}

const randomIndex = () => {
  return Math.floor(Math.random() * nums.length)
}
</script>

<style scoped>

span {
    margin: 0 4px;
    font-size: 16px;
    display: inline-block;
}

.tq-enter-from,
.tq-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.tq-enter-to,
.tq-leave-from{
  opacity: 1;
  transform: translateY(0);
}

.tq-enter-active,
.tq-leave-active{
  transition: all 2s ease-in;
}

.tq-leave-active{
  position: absolute;
}
/* 针对其他移动阶段需要的动画 */
.tq-move {
  transition: all 2s ease-in;
}
</style>

