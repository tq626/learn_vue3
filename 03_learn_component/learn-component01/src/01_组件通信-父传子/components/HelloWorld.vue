<template>
  <div class="box">
    <h2 :name="$attrs.name">hello World</h2>
    <p>{{message}}</p>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  inheritAttrs:false,
  props: {
    message: {
      type: String,
      default: ""
    },
    info:{
      type:Object,
      default: ()=> {
        return {}
      }
    },
    arr:{
      type: Array,
      default:() => {
        return []
    }
  }
 }
}
</script>


<style scoped>

</style>
