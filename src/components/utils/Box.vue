<template>
  <div id="box" class="p-2 mx-auto my-3">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Box",
  data(){
    return{

    }
  }
})
</script>

<style scoped>
#box{
  width: 100%;
  max-width: 400px;
  border: darkgray solid 1px;
  border-radius: 5px;
}
</style>