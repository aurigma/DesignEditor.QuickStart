<template>
  <div class="gallery">
    <div class="gallery-panel"
         v-for="item in items"
         :key="item.id">
      <router-link :to="`/${mode}/${encodeURIComponent(item.id)}`">
        <div>
          <img :src="item.preview || '../assets/logo.png'" @error="handleImageLoadingError">
        </div>
      </router-link>
      <span>{{item.id}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ProjectDto } from '../code/models/ProjectDto';
import { ProductDto } from '../code/models/ProductDto';

export default Vue.extend({
  name: 'Gallery',
  props: {
      items: {
          type: Array as () => Array<ProductDto>
      },
      mode: {
        type: String
      }
  },
  methods :{
    handleImageLoadingError(event: Event) {
      let target = event.target as HTMLImageElement;
      let source = document.getElementById('cc-logo') as HTMLImageElement;
      target.src = source.src;
    }
  }
});
</script>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }
  .gallery-panel div {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
  .gallery-panel div img {
    max-width:100%;
    max-height:100%;
  }
  span {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  }
</style>