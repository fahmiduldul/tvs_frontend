export type PollIds = 'tvs';

export interface Poll{
  title: string,
  options: VoteOption,
}

export type VoteOption = Record<VoteChoice, Vote>

export type VoteChoice = 'a' | 'b';

export interface Vote {
  voteId:string,
  voteTitle:string,
  voteText:string
  voteImage:string
}
