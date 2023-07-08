<template>
  <div class="app">
    
  </div>
</template>

<script>
import tabControl from './components/tabControl.vue'
import home from './components/home.vue'
import category from './components/category.vue'
export default {
  name: 'App',
  components: {
    tabControl,
    home,
    category
  },
  data() {
    return {
      message: "tq",
      isShow: true
    }
  },
  beforeCreate() {

  },
  created() {
    console.log("组件创建完成")
    console.log("1.发送网络请求, 请求数据")
    console.log("2.监听eventBus事件")
    console.log("3监听watch数据")
  },
  // 3.组件template准备被挂载
  beforeMount() {
    console.log("beforeMount")
  },
  // 4.组件template被挂载: 虚拟DOM -> 真实DOM
  mounted() {
    console.log("mounted")
    console.log("1.获取DOM")
    console.log("2.使用DOM")
  },
  // 5.数据发生改变
  // 5.1.准备更新DOM
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  // 准备卸载VNode -> DOM元素
  // 卸载之前
  beforeUnmount() {

  },
  unmounted() {
    console.log("卸载之后")
  }
}
</script>

<style>

</style>
