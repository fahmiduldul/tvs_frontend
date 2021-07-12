<template>
  <!-- vote options -->
  <div class="row">
    <div class="col">
      <card :pollId="pollId" :vote="'a'"></card>
    </div>
    <div class="col">
      <card :pollId="pollId" :vote="'a'"></card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import card from '@/components/poll/Card.vue'
import {PollId} from '@/interfaces/shared'
import polls from '@/config/voteOptions'

export default defineComponent({
  props:{
    pollId:{type: String as PropType<PollId>}
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