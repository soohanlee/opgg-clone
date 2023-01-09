import { SummonerDTO } from "@app/apis/types";
import { getSummonerQuery } from "./useSummonerData";
import { queryClient } from "@app/config/constants";

export const useSummonerLoader = async ({
  params,
}: any): Promise<SummonerDTO> => {
  const query = getSummonerQuery(params.summonerName);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
