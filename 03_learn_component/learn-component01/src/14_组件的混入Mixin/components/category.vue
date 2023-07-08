<template>
  <div class="tab-control">
      <h2>category</h2>
  </div>
</template>

<script>
  import messageMixin from '../mixins/message-mixin'
  export default {
    mixins: [messageMixin],
    name:"category",
    
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
