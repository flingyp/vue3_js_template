import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000, // 指定项目启动端口
    open: true, // 项目启动时自动在浏览器中打开应用程序
    cors: true // 允许跨域
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/global_var.less')}";`
        },
        javascriptEnabled: true
      }
    }
  }
})
