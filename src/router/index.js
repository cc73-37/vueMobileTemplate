import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [];
routes = routes.concat(require('../views/home/router').default)  // ��ҳ
routes = routes.concat(require('../views/user/router').default)  // �û�
let router = new Router({
  routes
})

export default router