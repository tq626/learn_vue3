import { createApp } from 'vue'
// import App from './02_内置组件/App.vue'
// import App from './04_rander函数/App.vue'
// import App from './05_JSX语法/App.vue'
import App from './06_过渡动画/App.vue'
import useDirectives from './01_自定义指令/directives'

const app = createApp(App)

useDirectives(app)

app.mount('#app')
