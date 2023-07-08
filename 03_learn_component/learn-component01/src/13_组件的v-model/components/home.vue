<template>
  <div class="tab-control">
    <h2>HOME</h2>
    <h2>Counter: {{modelValue}}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    props:{
      modelValue:{
        type:Number,
        default: 0
      }
    },
    emits:["update:modelValue"],
    data() {
      return{
        currentIndex: 0
      }
    },
    methods:{
      changeCounter(index) {
        this.$emit("update:modelValue", "home")
      }
    }
  }
</script>


<style scoped>
.tab-control{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.tab-control-item {
  flex: 1;
}
.active{
  color: pink;
  font-size: 500;
}
</style>
