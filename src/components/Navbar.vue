<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="" width="24" height="24">
        </a>

        <!-- navbar button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- everything inside here will be collapsed on mobile -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <!-- each item or link is a li inside here -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <nav-vue-router :to="'/'">Home</nav-vue-router>

            <nav-vue-router :to="'/auth'">Login/Signup</nav-vue-router>

          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import navVueRouter from '@/components/utils/NavVueRouter.vue'

export default defineComponent({
  name:"navbar",
  components:{navVueRouter}
})
</script>

<style>

</style>