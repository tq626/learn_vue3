<template>
  <div class="tab-control">
    <h2>HOME</h2>
    <span>{{name}}-{{age}}</span>
    
  </div>
</template>

<script>
  export default {
    name: "home",
    props:{
      name: {
        type: String,
        default: ''
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits:["homeClick"],
    data() {
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index) {
        this.$emit("homeClick", "home")
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
