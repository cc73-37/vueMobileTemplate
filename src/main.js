import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})