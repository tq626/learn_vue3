<template>
  <div class="app">
    <div class="tabs">
      <div v-for="(item, index) in tabs" :key="index">
          <button :class="{ active: currentIndex === index }" @click="btnClick(index)">{{item}}</button>
      </div>
    </div>
    <div class="view">
        <!-- 1.用v-if进行逻辑判断 -->
        <!-- <template v-if="currentIndex === 0">
            <home></home>
        </template>
        <template v-else-if="currentIndex === 1">
            <tab-control></tab-control>
        </template>
        <template v-else-if="currentIndex === 2">
            <category></category>
        </template> -->

        <!-- 2.第二种方法 动态组件 component-->
        <!-- is中的组件需要来自两个地方:1.全局注册的组件2.局部注册的组件 -->
        <component :is="tabs[currentIndex]"
                   :name="name"
                   :age="age"
                   @homeClick="homeClick"></component>
    </div>
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
      tabs:["home", "tabControl", "category"],
      currentIndex: 0,
      name: "tq",
      age: 18,
    }
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index
    },
    homeClick(payload) {
      console.log("homeClick", payload)
    }
  }
}
</script>

<style scoped>
.tabs{
  display: flex;
}
.active{
  color: pink;
}
</style>
