<template>
  <div class="tab-control">
    <h2>tabControl</h2>
  </div>
  
</template>

<script>
  import messageMixin from '../mixins/message-mixin'
    export default {
      mixins: [messageMixin],
      name: "tabControl",

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
