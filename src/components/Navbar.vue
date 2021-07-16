<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="" width="35" height="35">
        </a>

        <!-- navbar button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- everything inside here will be collapsed on mobile -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <!--left side of navbar-->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <nav-vue-router :to="'/'">Home</nav-vue-router>

            <nav-vue-router :to="'/auth'">Login/Signup</nav-vue-router>

            <nav-vue-router :to="'/dashboard'">Dashboard</nav-vue-router>
          </ul>

          <!--right side og navbar-->
          <ul class="navbar-nav ms-auto">

            <!--linkedin-->
            <li class="nav-item">
              <a href="https://www.linkedin.com/in/fahmi-abdulaziz/" class="nav-link">
                <img src="../assets/linkedin-logo.svg" width="30" height="30">
              </a>
            </li>

            <!--this could be another component, but i'll do it later-->
            <!--github-->
            <li class="nav-item dropdown">

              <!--dropdown toggle icon-->
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/github-logo.svg" width="30" height="30">
              </a>

              <!--dropdown items-->
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="https://github.com/fahmiduldul/tvs_backend">
                    Project Backend
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://github.com/fahmiduldul/tvs_frontend">
                    Project Frontend
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://github.com/fahmiduldul/portfolio">
                    My Other Project
                  </a>
                </li>
              </ul>
            </li>

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