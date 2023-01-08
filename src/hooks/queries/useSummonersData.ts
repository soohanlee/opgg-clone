import { api, mockApi } from "@app/apis/api";
import summoners from "@app/mock/summoners.json";
import { SummonersDTO } from "@app/apis/types";
import { queryKeys } from "@app/config/constants";
import { useQuery } from "@tanstack/react-query";
mockApi.onGet(`/api/summoners`).reply(200, summoners);

const getSummoners = (summonerName: string) => {
  return api.get<SummonersDTO>(`/api/summoners`);
};

export const getSummonesrQuery = (summonerName: string) => ({
  queryKey: [queryKeys.summoners, summonerName],
  queryFn: async () => {
    const { data } = await getSummoners(summonerName);
    return data;
  },
});

export const useSummonersQuery = (query: string) => {
  return useQuery<SummonersDTO, Error>(getSummonesrQuery(query));
};
