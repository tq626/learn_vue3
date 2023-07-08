<template>
  <div class="app">
    
    <tab-control >
       <template v-slot:left>
          <span>返回</span>
       </template>

       <template v-slot:center>
          <span>内容</span>
       </template>

       <template v-slot:right>
          <span>登录</span>
       </template>
    </tab-control>

    <!-- 动态插槽 -->
    <tab-control>
      <template v-slot:[position]>
        <a href="#">注册</a>
      </template>
    </tab-control>

    <button @click="btnClick('left')">左边</button>
    <button @click="btnClick('center')">中间</button>
    <button @click="btnClick('right')">右边</button>
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
      position: 'center'
    }
  },
  methods:{
    btnClick(value) {
      this.position = value
    }
  }
}
</script>

<style>

</style>
