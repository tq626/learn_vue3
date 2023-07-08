<template>
  <div class="tab-control">
    <h2>HOME</h2>
  </div>
</template>

<script>
  import messageMixin from '../mixins/message-mixin'
  export default {
    mixins:[messageMixin],
    name: "home",
    props:{
      modelValue:{
        type:Number,
        default: 0
      }
    },

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
