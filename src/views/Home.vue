<template>
  <div class="container">
    <h2>TODAY FIGHT</h2>
    <carousel  title="Tab VS Space!"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import carousel from '@/components/utils/Carousel.vue'

export default defineComponent({
  name: 'Home',
  components: {carousel},
  data(){
    return {
      tempPath:'logo.png'
    }
  }
});
</script>
