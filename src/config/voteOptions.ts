import {PollIds, Poll} from '@/interfaces/shared'

const polls:Record<PollIds,Poll> = {
  "tvs":{
    title:"Tab VS Space",
    options:{
      a:{voteId:"tab", voteImage:"tab.png",voteTitle:"Tab", voteText:"the most make sense one"},
      b:{voteId:"space", voteImage:"space.png",voteTitle:"Space", voteText:"seroiusly??"}
    }
  }
}

export default polls