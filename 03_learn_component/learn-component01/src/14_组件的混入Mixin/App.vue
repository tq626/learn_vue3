<template>
  <div class="app">
    <!-- input的v-model -->
    <!-- <input type="text" v-model="count">
    <input type="text" :value="count" @input="count = $event.target.value"> -->
    <!-- 组件的v-model -->
    <!-- <home v-model="count"></home> -->
    <home :modelValue="count" @update:modelValue="count = $event"></home>


  </div>
</template>

<script>

import tabControl from './components/tabControl.vue'
import home from './components/home.vue'
import category from './components/category.vue'

export default {
  name: 'App',
  components: {
    tabControl,
    home,
    category
  },
  data() {
    return {
     count: 30
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
.tabs{
  display: flex;
}
.active{
  color: pink;
}
</style>
