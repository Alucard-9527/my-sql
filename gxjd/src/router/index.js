import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jxgc',
    name: 'jxgc',
    component: () => import('../views/Jxgc.vue')
  },
  {
    path: '/dqgc',
    name: 'dqgc',
    component: () => import('../views/dqgc.vue')
  },
  {
    path: '/gsgl',
    name: 'gsgl',
    component: () => import('../views/gsgl.vue')
  },
  {
    path: '/jsj',
    name: 'jsj',
    component: () => import('../views/jsj.vue')
  },
  {
    path: '/qcgc',
    name: 'qcgc',
    component: () => import('../views/qcgc.vue')
  },
  {
    path: '/jzgc',
    name: 'jzgc',
    component: () => import('../views/jzgc.vue')
  },
  {
    path: '/ysx',
    name: 'ysx',
    component: () => import('../views/ysx.vue')
  },
  {
    path: '/rwkx',
    name: 'rwkx',
    component: () => import('../views/rwkx.vue')
  },
  {
    path: '/sxzz',
    name: 'sxzz',
    component: () => import('../views/sxzz.vue')
  },
  {
    path: '/jxjy',
    name: 'jxjy',
    component: () => import('../views/jxjy.vue')
  },
  {
    path: '/jcjn',
    name: 'jcjn',
    component: () => import('../views/jcjn.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
