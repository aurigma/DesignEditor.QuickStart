<template>
  <div class="home">
    <HomePage :msg="message"/>
    <gallery :items="products" mode="products"></gallery>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import HomePage from '@/components/HomePage.vue'
import Gallery from '@/components/Gallery.vue'
export default Vue.extend({
  name: 'products',
  components: {
    HomePage, 
    Gallery
  },
  computed: {
    products(): [] {
      return this.$store.state.products;
    },
    hasProducts(): Boolean {
      return this.$store.state.products.length > 0;
    },
    message(): String {
      if (this.hasProducts) {
        return "Available products";
      } else {
        return "There are no products yet";
      }
    }
  },
  mounted() {
    this.$store.dispatch('SET_PRODUCTS');
  }
});
</script>
