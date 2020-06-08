<template>
  <div class="home">
    <HomePage :msg="message"/>
    <gallery :items="states" mode="states"></gallery>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from '@/components/HomePage.vue'
import Gallery from '@/components/Gallery.vue'

export default Vue.extend({
  name: 'states',
  components: {
    HomePage, 
    Gallery
  },
  computed: {
    states(): [] {
      return this.$store.state.states;
    },
    hasStates(): Boolean {
      return this.$store.state.states.length > 0;
    },
    message(): String {
      if (this.hasStates) {
        return "Saved states";
      } else {
        return "There are no saved states yet";
      }
    }
  },
  mounted() {
    this.$store.dispatch('SET_TOKEN');
    this.$store.dispatch('SET_STATES');
  }
});
</script>
