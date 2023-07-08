<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index">
        <div 
          @click="itemClick(index)"
          :class="{active: index === currentIndex}"
          >{{item}}</div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  // emits:["add"],
  emits: {
    
  },
  props: {
    titles:{
      type: Array,
      default: ()=>[]
    }
 },
 emits:["tabItemClick"],
 data() {
  return{
    currentIndex: 0
  }
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
