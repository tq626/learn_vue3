<template>
  <div class="app">
    <h2>当前计数: {{counter}}</h2>
    <add-counter @add="addClick"></add-counter>
    <sub-counter @sub="subClick"></sub-counter>
  </div>
  
</template>

<script>
import addCounter from './components/addCounter.vue'
import subCounter from './components/subCounter.vue'
export default {
  name: 'App',
  components: {
    addCounter,
    subCounter
  },
  data() {
    return {
      message: "tq",
      counter: 0
    }
  },
  methods:{
    addClick(count) {
      this.counter += count
    },
    subClick(count) {
      this.counter -= count
    }
  }
}
</script>

<style>

</style>
