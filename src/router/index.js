import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [];
routes = routes.concat(require('../views/home/router').default)  // Ê×Ò³
routes = routes.concat(require('../views/user/router').default)  // ÓÃ»§
let router = new Router({
  routes
})

export default router