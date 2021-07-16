<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-sm-12">
        <h4>Polls</h4>
      </div>
      <div class="col-lg-4 col-sm-12">
        <h4>Statistic</h4>
      </div>
    </div>

    <pollAndStat :pollId="pollId" v-for="pollId in pollIds" :key="pollId" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import pollAndStat from "@/components/poll/PollAndStat.vue";
import voteOptions from "@/config/voteOptions";

export default defineComponent({
  name: "Dashboard",
  components:{pollAndStat},
  data(){
    return{
      pollIds:Object.keys(voteOptions)
    }
  }
})
</script>

<style scoped>

</style>