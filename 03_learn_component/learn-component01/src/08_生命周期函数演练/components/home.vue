<template>
  <div class="tab-control">
    
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
      eventBus.on("tqEvent", (name, age, height)=> {
        console.log("tqEvent事件监听", name, age, height)
      })
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        this.$emit("tabItemClick", index)
      }
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
