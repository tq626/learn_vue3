<template>
  <div class="container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
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
    title:{
      type: String,
      default: "默认"
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
.container{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left{
  width: 60px;
  background-color: pink;
}
.center{
  flex: 1;
  background-color: orange;
}
.right{
  width: 60px;
  background-color: skyblue;
}
</style>
