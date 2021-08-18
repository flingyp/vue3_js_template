import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 引入公共JS 插件
import commonJs from '@/utils'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(commonJs)
app.mount('#app')
