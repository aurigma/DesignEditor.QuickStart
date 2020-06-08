<template>
  <div id="app" style="height:92vh">
    <header class="header">
      <router-link to="/" class="logo"><img src="./assets/logo_cc.svg" id="cc-logo"></router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><router-link to="/">PRODUCTS</router-link></li>
        <li><router-link to="/projects">PROJECTS</router-link></li>
        <li>
          <div class="user-id-holder">
            <label style="font-size:18px; margin-left:20px">USER ID </label>
            <input type="text" v-model="userId" v-on:change="event => changeUserId(event)" class="user-id-input">
          </div>
        </li>
      </ul>
    </header>
    <keep-alive include="home" style="margin-top:310px">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';

export default {
  computed: {
    userId: {
      get() {
        return this.$store.state.userId;
      },
      set(value) {
        this.$store.dispatch('SET_USERID', value);
      }
    },
  },
  mounted() {
    this.$store.dispatch('SET_USERID');
  },
  methods: {
    async changeUserId(event) {
      let value = event.target.value;
      this.$store.dispatch('SET_USERID', value);
    }
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

.user-id-input {
  height: 24px;
  font-size: 18px;
  width: 8em;
}

#cc-logo {
  width: 36px; 
  height: 36px; 
  vertical-align: middle; 
  margin-right: 1em;
}

a {
  color: #000;
}
.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  width: 100%;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  font-size:18px;
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  text-decoration: none;
}
.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}
.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

a.router-link-exact-active {
  color: #1FB6FF;
  text-decoration: none;
}

.user-id-holder {
  margin-top: 5px; 
  display: block; 
  float: right; 
  padding: 10px 20px; 
  text-decoration: none;
  width: 100%;
}

@media (min-width: 768px) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
  .header .logo {
    margin-top: 6px;
  }
}


</style>
