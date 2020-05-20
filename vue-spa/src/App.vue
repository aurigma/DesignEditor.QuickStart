<template>
  <div id="app">
    <div id="nav">
      <div class="nav-wrapper">
        <img src="./assets/logo.png" style="display:none" id="vue-logo">
        <img src="./assets/logo_cc.svg" id="cc-logo">
        <router-link to="/">DESIGNS </router-link> | 
        <router-link to="/states">STATES</router-link>
      </div>
      <div class="user-id-wrapper">
        <label>USER ID </label><input type="text" v-model="userId" class="user-id-input"><br>
      </div>
    </div>
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  computed: {
    userId: {
      get() {
        return this.$store.state.userId;
      },
      set(value) {
        this.$store.dispatch('SET_USERID', value);
        this.$store.dispatch('SET_TOKEN');
      }
    },
  },
  mounted() {
    this.$store.dispatch('SET_USERID');
    this.$store.dispatch('SET_TOKEN');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-size: 24px;
  padding: 30px;
  line-height: 36px;
  border-bottom-color: #e7e7e7;
  border-bottom-style: solid;
  border-bottom-width: thin;
  height: 1em;
}

#nav div.nav-wrapper {
  text-align: center;
  float: left;
}
#nav div.user-id-wrapper {
  text-align: center;
  float: right;
}

#nav a {
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1FB6FF;
  text-decoration: none;
}

.user-id-input {
  height: 24px;
  font-size: 24px;
  width: 8em;
}

#cc-logo {
  width: 36px; 
  height: 36px; 
  vertical-align: middle; 
  margin-right: 1em;
}

</style>
