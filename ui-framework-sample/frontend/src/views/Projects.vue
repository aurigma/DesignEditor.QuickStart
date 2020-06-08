<template>
  <div class="home">
    <HomePage :msg="message"/>
    <gallery :items="projects" mode="projects"></gallery>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import HomePage from '@/components/HomePage.vue'
import Gallery from '@/components/Gallery.vue'
export default Vue.extend({
  name: 'projects',
  components: {
    HomePage, 
    Gallery
  },
  computed: {
    projects(): [] {
      return this.$store.state.projects;
    },
    hasProjects(): Boolean {
      return this.$store.state.projects.length > 0;
    },
    message(): String {
      if (this.hasProjects) {
        return "Saved projects";
      } else {
        return "There are no saved projects yet";
      }
    }
  },
  mounted() {
    this.$store.dispatch('SET_PROJECTS');
  }
});
</script>