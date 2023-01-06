import { api, mockApi } from "@app/apis/api";
import summoner from "@app/mock/summoner.json";
import matchDetail from "@app/mock/matchDetail.json";
import matches from "@app/mock/matches.json";
import mostInfo from "@app/mock/mostInfo.json";
import { SummonerDTO, MatchDetailDTO, MatchesDTO, MostInfoDTO } from "./types";

const summonerName = "일단존버할게요";
const gameId = "123";

mockApi.onGet(`/summoner/${summonerName}/matches`).reply(200, matches);
mockApi.onGet(`/summoner/${summonerName}/mostInfo`).reply(200, mostInfo);

export const getMatches = (summonerName: string) => {
  return api.get<MatchesDTO>(`/api/summoner/${summonerName}/matches`);
};

export const getMostInfo = (summonerName: string) => {
  return api.get<MostInfoDTO>(`/api/summoner/${summonerName}/mostInfo`);
};
