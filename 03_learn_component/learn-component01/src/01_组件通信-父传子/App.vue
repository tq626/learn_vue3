<template>
  <hello-world :message="message" :info="info" :arr="arr"
                name="tq"></hello-world>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "tq",
      info:{
        name: "tq",
        age: 18
      },
      arr: ["tq", 18]
    }
  }
}
</script>

<style>

</style>
