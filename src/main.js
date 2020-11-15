import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css';
import './utils/tools'
Vue.use(Vant)


if (process.env.NODE_ENV !== 'production') {
  let vConsole = require('vconsole')
  new vConsole()
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})