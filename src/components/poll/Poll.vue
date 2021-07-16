<template>
  <!-- vote options -->
  <div class="row">
    <div class="col">
      <card :pollId="pollId" :vote="'a'" />
    </div>
    <div class="col">
      <card :pollId="pollId" :vote="'b'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import card from '@/components/poll/VoteCard.vue'
import {PollIds} from '@/interfaces/shared'
import polls from '@/config/voteOptions'

export default defineComponent({
  props:{
    pollId:{required: true, type: String as PropType<PollIds>}
  },
  components:{card},
  data(){
    return{
      poll: polls[this.pollId]
    }
  }
})
</script>

<style>

</style>