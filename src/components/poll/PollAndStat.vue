<template>
  <h4>{{this.poll.title}}</h4>
  <div class="row">
    <div class="col-lg-8 col-sm-12">
      <poll :poll-id="pollId"/>
    </div>
    <div class="col-lg-4 col-sm-12">
      <h5>heyoooow</h5>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import poll from "@/components/poll/Poll.vue";
import polls from "@/config/voteOptions";
import {PollIds} from "@/interfaces/shared";

export default defineComponent({
  name: "PollAndStat",
  components:{poll},
  props:{
    pollId:{
      type:String as PropType<PollIds>,
      required: true}
  },
  data(){
    return {
      poll: polls[this.pollId]
    }
  }
})
</script>

<style scoped>

</style>