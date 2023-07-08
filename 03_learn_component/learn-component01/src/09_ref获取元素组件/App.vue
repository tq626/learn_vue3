<template>
  <div class="app">
    <tab-control ref="tab"></tab-control>
    <button @click="changeBtn"></button>
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
  methods: {
    changeBtn() {
      // 获取组件实例
      console.log(this.$refs.tab)

      // 在父组件中可以主动的调用组件的对象方法
      this.$refs.tab.itemClick()

      // 获取banner组件实例, 获取banner中的元素
      console.log(this.$refs.banner.$el)
    }
  }
}
</script>

<style>

</style>
