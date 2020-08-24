import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [];
routes = routes.concat(require('../views/home/router').default)  // 首页
routes = routes.concat(require('../views/user/router').default)  // 用户
let router = new Router({
  routes
})

export default router