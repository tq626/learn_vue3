<template>
  <div class="app">
    <div class="content">
      <teleport to='body'>
        <hello-world></hello-world>
      </teleport>
    </div>
  </div>
</template>

<script setup>

import HelloWorld from './HelloWorld.vue';
</script>

<style lang="less" scoped>

  
</style>

