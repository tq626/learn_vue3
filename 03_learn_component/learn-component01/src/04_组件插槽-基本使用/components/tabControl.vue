<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot>
        <p>默认插槽</p>
      </slot>
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
