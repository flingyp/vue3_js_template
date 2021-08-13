import { createStore } from 'vuex'

/**
 * 创建一个新的 store 实例
 */
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    getters_count: state => {
      let gettersCount = `state经过处理的getters_count：${state.count}`
      return gettersCount
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    actions_increment(context) {
      context.commit('increment')
    }
  }
})

export default store
