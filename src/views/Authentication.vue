<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-sm-12" id="left-col">
        <login />
      </div>
      <div class="col-lg-5 col-sm-12">
        <signup />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import login from '@/components/auth/Login.vue'
import signup from '@/components/auth/Signup.vue'

export default defineComponent({
  name: "Authentication",
  components:{login, signup}
})
</script>

<style scoped>

</style>