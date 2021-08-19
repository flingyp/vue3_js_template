<template>
  <div class="vuex-test">访问state里的数据：{{ ount }}</div>
  <div class="vuex-test">
    访问getter里的数据：
    {{ gettersCount }}
  </div>
  <button @click="increment" class="vuex-button">点击触发mutations</button>
  <button @click="asyncIncrement" class="vuex-button">点击触发actions_increment</button>
</template>

<script>
  import { computed, getCurrentInstance } from 'vue'
  import { useStore } from 'vuex'

  export default {
    name: 'Test',
    setup() {
      // 测试 公共方法 commonJs插件是否可以使用
      const { proxy } = getCurrentInstance()
      console.log('proxy', proxy)
      proxy.$comJs.function1()
      proxy.$comJs.function2()
      proxy.$ajax()

      /**
       * 通过调用 useStore 函数，来在 setup 钩子函数中访问 store
       * 这与在组件中使用选项式 API 访问 this.$store 是等效的
       */
      const store = useStore()
      // console.log('store', store)

      return {
        /**
         * 访问 state 和 getter，需要创建 computed 引用以保留响应性
         * 这与在选项式 API 中创建计算属性等效
         */

        /**
         * 使用 mutation 和 action 时
         * 只需要在 setup 钩子函数中调用 commit 和 dispatch 函数。
         */
        count: computed(() => store.state.count), // 访问 state
        gettersCount: computed(() => store.getters.getters_count), // 访问 getter
        increment: () => store.commit('increment'),
        asyncIncrement: () => store.dispatch('actions_increment')
      }
    }
  }
</script>

<style lang="less">
  // 已测试 三种方式引入均可
  // @import url(@/style/common.less);
  // @import url('@/style/common.less');
  @import '@/style/common.less';

  .vuex-test {
    margin: 10px 0;
    color: @baseColor;
  }

  .vuex-button {
    border: 1px solid @buttonColor;
    color: @buttonColor;
    background: @buttonBg;
    padding: 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
