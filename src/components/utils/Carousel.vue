<template>
  <!--carousel title-->
  <h3>{{title}}</h3>

  <!--carousel-->
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

    <!--carousel images-->
    <div class="carousel-inner">
      <div class="carousel-item" :class="{active:num===0}" v-for="num in [0,1,2]" :key="num">
        <img :src="require('@/assets/' + tempPath)" class="w-25 h-25" alt="...">
      </div>
    </div>

    <!--caroursel control-->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Carousel",
  props:{
    title:{type:String, required:true}
  },
  data(){
    return{
      tempPath:'logo.png'
    }
  }
})
</script>

<style scoped>

</style>