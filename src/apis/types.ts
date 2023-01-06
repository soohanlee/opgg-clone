export type Champion = {
  imageUrl: string;
  level: number;
};

export type ChampionWinRate = {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
};

export type FellowPlayer = {
  champion: Champion;
  summonerId: string;
  summonerName: string;
};

export type GameInfo = {
  champion: Champion;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: ImageObj[];
  mapInfo: MapInfo;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: ImageObj[];
  stats: GameInfoStats;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
};

export type GameInfoStats = {
  general: General;
  ward: Ward;
};

export type General = {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
};

export type ImageObj = {
  imageUrl: string;
};

export type LadderRank = {
  rank: number;
  rankPercentOfTop: number;
};

export type League = {
  hasResults: boolean;
  losses: number;
  tierRank: TierRank;
  wins: number;
};

export type MapInfo = {
  imageUrl: string;
  mapId: number;
};

export type MatchDetailDTO = {
  gameId: string;
  teams: Team[];
};

export type MostChampion = {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
};

export type MostInfoDTO = {
  champions: MostChampion[];
  recentWinRate: ChampionWinRate[];
};

export type Position = {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
};

export type Summary = {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
};

export type Team = {
  players: FellowPlayer[];
  teamId: number;
};

export type Summoner = {
  ladderRank: LadderRank;
  leagues: League[];
  level: number;
  name: string;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
};

export type SummonerDTO = {
  summoner: Summoner;
};

export type TierRank = {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
};

export type Ward = {
  sightWardsBought: number;
  visionWardsBought: number;
};

export type MatchesDTO = {
  games: GameInfo[];
  champions: Champion[];
  positions: Position[];
  summary: Summary;
};

export interface Params {
  summonerName: string;
}
