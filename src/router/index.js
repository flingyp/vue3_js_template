import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 定义路由
 */
const routes = [
  { path: '/', component: import('@/views/index.vue') },
  { path: '/test', component: import('@/views/test.vue') }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
