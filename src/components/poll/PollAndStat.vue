<template>
  <h3>{{poll.title}}</h3>
  <div class="row">
    <div class="col-lg-8 col-sm-12">
      <poll :poll-id="pollId"/>
    </div>
    <div class="col-lg-4 col-sm-12">
      <stat :pollId="pollId"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import poll from "@/components/poll/Poll.vue";
import polls from "@/config/voteOptions";
import stat from "@/components/poll/Stat.vue";
import {PollIds} from "@/interfaces/shared";

export default defineComponent({
  name: "PollAndStat",
  components:{poll, stat},
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