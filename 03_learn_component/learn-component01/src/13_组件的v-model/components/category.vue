<template>
  <div class="tab-control">
      <h2>category</h2>
      <h2>当前计数:{{counter}}</h2>
      <button @click="counter++">+1</button>
  </div>
</template>

<script>
  
  export default {
    name:"category",
    data() {
      return{
        counter: 0,
        currentIndex: 0
      }
    },
    created() {
      console.log("category created~")
      
    },
    unmounted() {
      console.log("category unmounted~")
    },

    // 对于专门用了keep-alive的组件, 监听是否有切换(created, unmounted不管用)
    activated() {
      console.log("activated")
    },
    deactivated() {
      console.log("deactivated")
    }
  }
</script>


<style scoped>



</style>
