import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import home from '@/views/home/index.vue'

Vue.use(Router)

const routes: RouteConfig[] = [{
  path: '/hw',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/',
  name: 'Home',
  component: home
}]
export default new Router({
  routes
})