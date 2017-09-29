// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {fontSize} from './assets/rem.js'
fontSize()
import "./assets/reset.css"

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper)

import "./data/main.js"

import store from "./store.js"

import axios from "axios"
import vueAxios from "vue-axios"
Vue.use(vueAxios,axios);

import vueBus from "vue-bus"
Vue.use(vueBus);

import "./fonts/iconfont.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:function(createElement){ //项目一启动之后，呈现给用户的第一个组件
　　　return createElement(App)
　}
})
