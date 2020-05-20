import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import States from '../views/States.vue'
import Editor from '../views/Editor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/states',
    name: 'states',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: States
  },
  {
    path: '/designs/:id',
    name: 'editor',
    component: Editor
  },
  {
    path: '/states/:id',
    name: 'editor',
    component: Editor
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
