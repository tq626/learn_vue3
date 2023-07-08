<template>
  <div class="box">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  // emits:["add"],
  emits: {
    add:function(count) {
      if (count <= 10) {
        return true
      }
      return false
    }
  },
  props: {
    
 },
 methods:{
  btnClick(count) {
    console.log(count)
    // 第一个参数自定义的事件名称
    // 第二个参数是传递的参数
    this.$emit("add", count)
  }
 }
}
</script>


<style scoped>

</style>
