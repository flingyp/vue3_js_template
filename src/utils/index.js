import allJs from './common/index'
import http from './common/http'

export default {
  install: (app, options) => {
    // console.log('app', app)
    // console.log('options', options)
    // Vue3 定义全局变量和方法
    app.config.globalProperties.$comJs = allJs
    app.config.globalProperties.$ajax = http
  }
}
