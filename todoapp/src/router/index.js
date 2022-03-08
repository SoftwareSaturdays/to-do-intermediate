import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { publicPath } from '../../vue.config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'ToDo App'
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
    props: true,
    meta: {
      title: 'Edit ToDo'
    }
  },
  {
    path: '/new',
    name: 'New',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue'),
    props: true,
    meta: {
      title: 'New ToDo'
    }
  }
]

const router = new VueRouter({
  base: publicPath,
  routes
})

export default router
