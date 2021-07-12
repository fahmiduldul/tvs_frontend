<template>
  <router-link :to="to" class="vue-link" v-slot="{isActive}">
    <li class="nav-item">
      <a href="#" class="nav-link" :class="{active: isActive}">
        <slot></slot>
      </a>
    </li>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "nav-vue-router",
  props:{
    to:{required: true, type: String}
  }
})
</script>

<style scoped>
.vue-link{
  text-decoration: none;
}
</style>