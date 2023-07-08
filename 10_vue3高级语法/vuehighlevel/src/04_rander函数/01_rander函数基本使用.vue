
<script>
 import { h } from 'vue'
 export default {
  render() {
    return h("div", { class: "contain" }, [
      h("h2", { class: "title" }, "我是标题"),
      h("span", { class: "span" }, "我是span")
    ])
  }
 }
</script>

<style lang="less" scoped>

  
</style>

