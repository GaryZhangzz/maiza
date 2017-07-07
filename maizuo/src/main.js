
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' 
import '../static/animate.min.css'
import './swiper.animate.js'

Vue.use(Vuex)
Vue.prototype.$http = axios;

Vue.use(MintUI);
Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
