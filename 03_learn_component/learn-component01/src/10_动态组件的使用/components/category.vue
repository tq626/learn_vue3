<template>
  <div class="tab-control">
      <h2>category</h2>
  </div>
</template>

<script>
  import eventBus from '../utils/event.bus'
  export default {
    data() {
      return{
        currentIndex: 0
      }
    },
    created() {
      console.log("tqEvent created~")
      eventBus.on("tqEvent", this.tqEventHandler)
    },
    methods:{
      tqEventHandler() {
        console.log("tqEvent在category中监听")
      }
    },
    unmounted() {
      console.log("tqEvent unmounted~")
      eventBus.off("tqEvent", this.tqEventHandler)
    }
  }
</script>


<style scoped>
.tab-control{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.tab-control-item {
  flex: 1;
}
.active{
  color: pink;
  font-size: 500;
}
</style>
