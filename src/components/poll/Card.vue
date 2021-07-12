<template>
  <div class="card">
    <!-- card image -->
    <img :src="require('@/assets/' + tempPath)" class="card-img-top" style="width:200px">

    <!-- card image -->
    <div class="card-body">
      <!-- card context -->
      <h5 class="card-title">{{poll.options[vote].voteTitle}}</h5>
      <p class="card-text">{{poll.options[vote].voteText}}</p>

      <!-- vote button -->
      <a @click="sendVote" class="btn btn-primary"> Vote {{poll.options[vote].voteTitle}}</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import polls from '@/config/voteOptions';
import {PollId, VoteChoice} from '@/interfaces/shared';

export default defineComponent({
  props:{
    pollId:{required: true,type:String as PropType<PollId>},
    vote:{required: true,type:String as PropType<VoteChoice>},
  },
  data(){
    return{
      poll:polls[this.pollId],
      tempPath:"logo.png"
    }
  },
  methods:{
    sendVote():void{
      // send request when button clicked
    }
  },
  computed:{
    // assetPath():string{
    //   return '@/assets/' + this.poll.options[this.vote].voteId
    // }
  }

})
</script>

<style>

</style>