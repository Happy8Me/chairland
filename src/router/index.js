import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/chairland',
    name: 'home',
    component: Home
  },
  {
    path: '/twelve-chairs',
    name: 'twelve-chairs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TwelveChairs.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "conact" */ '../views/Shop.vue')
  },
  {
    path: '/chair/:id',
    name: 'chair',
    component: () => import(/* webpackChunkName: "chair" */ '../views/Chair.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
