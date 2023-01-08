import { api, mockApi } from "@app/apis/api";
import { MostInfoDTO } from "@app/apis/types";
import { testSummonerName } from "@app/config/constants";
import { queryKeys } from "@app/config/constants";
import { useQuery } from "@tanstack/react-query";
import mostInfo from "@app/mock/mostInfo.json";

mockApi
  .onGet(`/api/summoner/${testSummonerName}/mostInfo`)
  .reply(200, mostInfo);

const getMostInfo = (summonerName: string) => {
  return api.get<MostInfoDTO>(`/api/summoner/${summonerName}/mostInfo`);
};

export const getMostInfoQuery = (summonerName: string) => ({
  queryKey: [queryKeys.summoner, summonerName, queryKeys.mostInfo],
  queryFn: async () => {
    const { data } = await getMostInfo(summonerName);
    return data;
  },
});

export const useMostInfoQuery = (query: string) => {
  return useQuery<MostInfoDTO, Error>(getMostInfoQuery(query));
};
