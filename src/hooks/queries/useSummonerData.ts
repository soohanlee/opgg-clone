import { api, mockApi } from "@app/apis/api";
import summoner from "@app/mock/summoner.json";
import { SummonerDTO } from "@app/apis/types";
import { testSummonerName } from "@app/config/constants";
import { queryKeys } from "@app/config/constants";
import { useQuery } from "@tanstack/react-query";

mockApi.onGet(`/api/summoner/${testSummonerName}`).reply(200, summoner);

const getSummoner = (summonerName: string) => {
  return api.get<SummonerDTO>(`/api/summoner/${summonerName}`);
};

export const getSummonerQuery = (summonerName: string) => ({
  queryKey: [queryKeys.summoner, summonerName],
  queryFn: async () => {
    const { data } = await getSummoner(summonerName);
    return data;
  },
});

export const useSummonerQuery = (query: string) => {
  return useQuery<SummonerDTO, Error>(getSummonerQuery(query));
};
