import { MatchesDTO, MostInfoDTO, SummonerDTO } from "@app/apis/types";
import { useQueryClient } from "@tanstack/react-query";
import { getMostInfoQuery } from "./useMostInfo";
import { getSummonerQuery } from "./useSummonerData";
import { getMatchesQuery } from "./useMatchesData";
import { queryClient } from "@app/config/constants";

// FIXME
// 여기 params에 any 변경 해야함
// 또한 loader에서 api통신을 3번 해야함 초반에 가져와야하는 데이터 api가 3번 나눠져 있음.
export const useSummonerLoader = async ({
  params,
}: any): Promise<SummonerDTO> => {
  const query = getSummonerQuery(params.summonerName);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
