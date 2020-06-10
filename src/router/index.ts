import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import home from '@/views/home/index.vue'
import home2 from '@/views/home/index2.vue'

Vue.use(Router)

const routes: RouteConfig[] = [{
  path: '/hw',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/',
  name: 'Home',
  component: home
}, {
  path: '/home2',
  name: 'Home2',
  component: home2
}]
export default new Router({
  routes
})