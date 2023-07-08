<template>
  <div class="app">
    
    <tab-control title="哈哈哈">
      <button>按钮</button>
    </tab-control>

      <tab-control>
        <a href="#">百度一下</a>
      </tab-control>

      <tab-control>
      </tab-control>
  </div>
</template>

<script>
import tabControl from './components/tabControl.vue'

export default {
  name: 'App',
  components: {
    tabControl,
    
  },
  data() {
    return {
      message: "tq",
      
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
