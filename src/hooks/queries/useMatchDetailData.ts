import { api, mockApi } from "@app/apis/api";
import { MatchDetailDTO } from "@app/apis/types";
import { testSummonerName, testGameId } from "@app/config/constants";
import { queryKeys } from "@app/config/constants";

import matchDetail from "@app/mock/matchDetail.json";

mockApi
  .onGet(`api/summoner/${testSummonerName}/matchDetail/${testGameId}`)
  .reply(200, matchDetail);

export const getMatchDetailQuery = (summonerName: string, gameId: string) => ({
  queryKey: [queryKeys.summoner, summonerName, queryKeys.detail, gameId],
  queryFn: async () => {
    const { data } = await getMatchDetail(summonerName, gameId);
    return data;
  },
});

export const getMatchDetail = (summonerName: string, gameId: string) => {
  return api.get<MatchDetailDTO>(
    `/api/summoner/${summonerName}/matchDetail/${gameId}`
  );
};
