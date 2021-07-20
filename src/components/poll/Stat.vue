<template>
  <div class="row">
    <!--left stat-->
    <div class="col">
      <div class="row">
        <h1>{{a}}</h1>
      </div>
      <div class="row">
        <h6>{{poll.options.a.voteTitle}}</h6>
      </div>
    </div>
    <!--right stat-->
    <div class="col">
      <div class="row">
        <h1>{{b}}</h1>
      </div>
      <div class="row">
        <h6>{{poll.options.b.voteTitle}}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, reactive} from "vue";
import {Poll, PollIds} from "@/interfaces/shared";
import polls from '@/config/voteOptions';

export default defineComponent({
  name: "Stat",
  props:{
    pollId:{required:true, type: Object as PropType<PollIds>}
  },
  setup(props){
    const poll = reactive<Poll>(polls[props.pollId])
    const a = ref<number>(0);
    const b = ref<number>(0);

    return {a,b, poll}
  }
})
</script>

<style scoped>

</style>