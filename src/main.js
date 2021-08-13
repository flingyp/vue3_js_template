import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const app = createApp(App)
// Vue3 定义全局变量和方法
app.config.globalProperties.$testFn = str => {
  console.log('我是全局方法->', str)
}
app.config.globalProperties.$testVar = 'testVar'

app.use(router)
app.use(store)
app.mount('#app')
