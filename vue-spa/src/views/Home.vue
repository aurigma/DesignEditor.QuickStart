<template>
  <div class="home">
    <HomePage :msg="message"/>
    <gallery :items="designs" mode="designs"></gallery>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from '@/components/HomePage.vue'
import Gallery from '@/components/Gallery.vue'

export default Vue.extend({
  name: 'home',
  components: {
    HomePage, 
    Gallery
  },
  computed: {
    designs(): [] {
      return this.$store.state.designs;
    },
    hasDesigns(): Boolean {
      return this.$store.state.designs.length > 0;
    },
    message(): String {
      if (this.hasDesigns) {
        return "Available designs";
      } else {
        return "There are no available designs yet";
      }
    }
  },
  mounted() {
    this.$store.dispatch('SET_TOKEN');
    this.$store.dispatch('SET_DESIGNS');
  }
});
</script>
