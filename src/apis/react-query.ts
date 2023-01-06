import { getMatches, getMostInfo } from "./endpotins";

const summonerKey = "summoner";
const matchDetailKey = "matchDetail";
const matchesKey = "matches";
const mostInfoKey = "mostInfo";

export const getMatchesQuery = () => ({
  queryKey: [matchesKey],
  queryFn: async (summoner: string) => {
    const { data } = await getMatches(summoner);
    return data;
  },
});

export const getMostInfoQuery = () => ({
  queryKey: [mostInfoKey],
  queryFn: async (summoner: string) => {
    const { data } = await getMostInfo(summoner);
    return data;
  },
});
