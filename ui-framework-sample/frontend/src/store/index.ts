import Vue from 'vue'
import Vuex from 'vuex'
import { BackendService } from '@/code/BackendService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    projects: [],
    userId: 'default',
    userToken: ''
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.userToken = data;
    },
    SET_USERID(state, data) {
      state.userId = data;
    },
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_PROJECTS(state, data) {
      state.projects = data;
    }
  },
  actions: {
    SET_USERID: async(context, userId) => {
      if (userId == '' || userId == undefined) {
        userId = 'default';
      }
      let userToken = await BackendService.getToken(userId);
      context.commit('SET_TOKEN', userToken);
      let projects = await BackendService.loadProjects(userId);
      context.commit('SET_PROJECTS', projects);

      context.commit('SET_USERID', userId);
    },
    SET_PROJECTS: async(context) => {
      let userId = context.state.userId;
      let projects = await BackendService.loadProjects(userId);
      context.commit('SET_PROJECTS', projects);
    },
    SET_PRODUCTS: async(context) => {
      let products = await BackendService.loadProducts();
      context.commit('SET_PRODUCTS', products);
    }
  },
  modules: {
  }
})
