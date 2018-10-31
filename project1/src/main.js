// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入vuex封装模块
// import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
import store from "./store"
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
