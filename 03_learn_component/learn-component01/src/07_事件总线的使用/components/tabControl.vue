<template>
  <div class="tab-control">
     <button @click="bannerBtnClick">banner按钮</button>
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
      methods:{
        itemClick(index) {
          this.currentIndex = index
          this.$emit("tabItemClick", index)
        },
        bannerBtnClick() {
          eventBus.emit("tqEvent", "tq", 18, 1.88)
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
