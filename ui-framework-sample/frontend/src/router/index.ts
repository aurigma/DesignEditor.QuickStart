import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Editor from '../views/Editor.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ui-framework-editor',
    component: Editor
  },
  {
    path: '/products/:id',
    name: 'ui-framework-editor',
    component: Editor
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
