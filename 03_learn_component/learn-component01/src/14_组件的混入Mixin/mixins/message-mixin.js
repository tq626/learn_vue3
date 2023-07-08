export default {
  data() {
    return{
      counter: 0,
      currentIndex: 0
    }
  },
  created() {
    console.log("category created~")
    
  },
  unmounted() {
    console.log("category unmounted~")
  },
}