import Vue from "vue";
import Vuex from "vuex";
import { BackendService } from "@/code/BackendService";

Vue.use(Vuex);

const defaultUserId = "userId";

export default new Vuex.Store({
  state: {
    designs: [],
    states: [],
    userId: defaultUserId,
    userToken: ""
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.userToken = data;
    },
    SET_DESIGNS(state, data) {
      state.designs = data;
    },
    SET_STATES(state, data) {
      state.states = data;
    },
    SET_USERID(state, data) {
      state.userId = data;
    }
  },
  actions: {
    SET_TOKEN: async (context) => {
      let userId = context.state.userId;
      let userToken = await BackendService.getToken(userId);
      context.commit("SET_TOKEN", userToken);
    },
    SET_DESIGNS: async (context) => {
      let designs = await BackendService.loadDesigns();
      context.commit("SET_DESIGNS", designs);
    },
    SET_STATES: async (context) => {
      let userId = context.state.userId;
      let states = await BackendService.loadStates(userId);
      context.commit("SET_STATES", states);
    },
    SET_USERID: (context, userId) => {
      if (userId == "" || userId == undefined) {
        userId = defaultUserId;
      }
      context.commit("SET_USERID", userId);
    }
  },
  modules: {
  }
})
