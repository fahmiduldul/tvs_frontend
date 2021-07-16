import {PollIds, Poll} from '@/interfaces/shared'

const polls:Record<PollIds,Poll> = {
  "tvs":{
    title:"Tab VS Space",
    options:{
      a:{voteId:"tab", voteTitle:"Tab", voteText:"the most make sense one"},
      b:{voteId:"space", voteTitle:"Space", voteText:"the most make sense one"}
    }
  }
}

export default polls