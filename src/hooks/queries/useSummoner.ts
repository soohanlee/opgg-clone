import { api, mockApi } from "@app/apis/api";
import summoner from "@app/mock/summoner.json";
import { SummonerDTO } from "@app/apis/types";
import { queryClient, testSummonerName } from "@app/config/constants";
import { queryKeys } from "@app/config/constants";
import { useQuery } from "@tanstack/react-query";

mockApi.onGet(`/summoner/${testSummonerName}`).reply(200, summoner);

const getSummoner = (summonerName: string) => {
  return api.get<SummonerDTO>(`/summoner/${summonerName}`);
};

export const getSummonerQuery = (summonerName: string) => ({
  queryKey: [queryKeys.summoner, summonerName],
  queryFn: async () => {
    const { data } = await getSummoner(summonerName);
    return data;
  },
});

// FIXME
// 여기 params에 any 변경 해야함
export const useSummonerLoader = async ({
  params,
}: any): Promise<SummonerDTO> => {
  const query = getSummonerQuery(params.summonerName);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const useSummonerQuery = (query: string) => {
  return useQuery<SummonerDTO, Error>(getSummonerQuery(query));
};
