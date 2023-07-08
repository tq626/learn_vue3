import { createApp } from 'vue'
// import App from './02_内置组件/App.vue'
import App from './03_安装插件/App.vue'
import useDirectives from './01_自定义指令/directives'

const app = createApp(App)
app.use(useDirectives) //use函数传入一个函数时默认会把app作为形参传入
useDirectives(app)

// 安装插件
// 方式一: 传入对象的情况
app.use({
  install: function(app) {

  }
})

// 方式二: 传入函数
app.use(function(app) {
  console.log("传入函数被执行", app)
})

// 本质
function use(obj) {
  obj.install()
}
use({
  install: function() {

  }
})
app.mount('#app')
