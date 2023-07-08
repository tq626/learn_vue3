<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control :titles="titles" @tab-item-click="tabItemClick">
    </tab-control>

    <tab-control>
      <template v-slot:default="props">
         <button>{{ props.item}}</button>
      </template>
    </tab-control>

    <!-- 2.展示内容 -->
    <h2>{{products[currentIndex]}}</h2>
  </div>
</template>

<script>
import tabControl from './components/tabControl.vue'
import subCounter from './components/subCounter.vue'
export default {
  name: 'App',
  components: {
    tabControl,
    subCounter
  },
  data() {
    return {
      message: "tq",
      counter: 0,
      titles: ['新款', '流行', '热款'],
      currentIndex: 0,
      products: ["新款列表", "流行列表", "热款列表"]
    }
  },
  methods:{
    tabItemClick(index) {
      this.currentIndex = index

    }
  }
}
</script>

<style>

</style>
