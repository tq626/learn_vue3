<template>
  <div class="app">
    <suspense>
      <!-- 默认使用这个组件 -->
      <template #default>
        <async-home/>
      </template>

      <!-- 在默认组件还没完全加载出来之前就调用这个组件 -->
      <template #fallback>
        <h2>Loading</h2>
      </template>
    </suspense>
  </div>
</template>

<script setup>

import { defineAsyncComponent } from 'vue';
const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"))
</script>

<style lang="less" scoped>

  
</style>

