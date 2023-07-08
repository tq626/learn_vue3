
<script>
 import { h } from 'vue'
 import Home from './components/Home.vue'
 export default {
  data() {
    return {
      counter: 0
    }
  },
  render() {
    return h("div", { class: "contain" }, [
      h("h2", { class: "title" }, `当前计数: ${this.counter}`),
      h("button", {onClick: this.increment}, "+1"),
      h("button", {onClick: this.decrement}, "-1"),
      // 组件的渲染
      h(Home)
    ])
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
 }
</script>

<style lang="less" scoped>

  
</style>

