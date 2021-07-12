<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <box>
          <template v-slot:header>
            <h4>Signup</h4>
          </template>
          <form method="post" action="#" v-on:submit.prevent>
            <div class="mb-3">
              <!--              <label for="emailLogin" class="form-label">Email</label>-->
              <input type="email" class="form-control" id="emailLogin" placeholder="Email">
            </div>

            <div class="mb-3">
              <!--              <label for="passwordLogin" class="form-label">Password</label>-->
              <input type="password" class="form-control" id="passwordLogin" placeholder="Password">
            </div>

            <div class="mb-3">
              <!--              <label for="passwordLogin" class="form-label">Password</label>-->
              <input type="password" class="form-control" id="passConfLogin" placeholder="Confirm password">
            </div>

            <div class="mb-3">
              <input type="submit" class="form-control btn-primary" id="submitSignup" value="Signup">
            </div>
          </form>
        </box>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import box from '@/components/utils/Box.vue'

export default defineComponent({
  name: "Signup",
  components:{box}
})
</script>

<style scoped>

</style>