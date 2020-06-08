<template>
  <div class="home">
      <h1 style="padding-top:75px">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomePage',
  props: {
    msg: String,
  },
});
</script>