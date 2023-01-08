import { api, mockApi } from "@app/apis/api";
import { MatchesDTO } from "@app/apis/types";
import { testSummonerName } from "@app/config/constants";
import { queryKeys } from "@app/config/constants";
import { useQuery } from "@tanstack/react-query";
import matches from "@app/mock/matches.json";

mockApi.onGet(`api/summoner/${testSummonerName}/matches`).reply(200, matches);

export const getMatches = (summonerName: string) => {
  return api.get<MatchesDTO>(`/api/summoner/${summonerName}/matches`);
};

export const getMatchesQuery = (summonerName: string) => ({
  queryKey: [queryKeys.summoner, summonerName, queryKeys.matches],
  queryFn: async () => {
    const { data } = await getMatches(summonerName);
    return data;
  },
});

export const useMatchesQuery = (query: string) => {
  return useQuery<MatchesDTO, Error>(getMatchesQuery(query));
};
