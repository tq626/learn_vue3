<template>
  <div class="app">
    <tab-control>   
    </tab-control>
    <home></home>
    <category v-if="isShow"></category>
    <button @click="isShowCop">按钮</button>
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
  methods:{
    tabItemClick(index) {
      this.currentIndex = index

    },
    isShowCop() {
      this.isShow = false
    }
  }
}
</script>

<style>

</style>
