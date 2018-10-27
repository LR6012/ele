import Vue from 'vue'
//导入vuex模块
import Vuex from 'vuex'
//导入状态state
import state from './state'
//引入getters
import {getters} from './getters'
//引入mutations
import mutations from './mutations'
//引入actions
import actions from './actions'
//配置vuex
Vue.use(Vuex);


//配置vuex
const store = new Vuex.Store({
    //共享状态:类似组件data
    state,
    //类似组件中的computed,依赖state
    getters,
    //修改状态的方法:类似组件的methods
    //处理同步操作!!!,action处理异步
    mutations,
    /*
    Action 类似于 mutation，不同在于：
  Action 提交的是 mutation，而不是直接变更状态。
  Action 可以包含任意异步操作  
    */
   actions
  })
  // alert(store.state.count); 0
  
  //导出存储对象
  export default store;