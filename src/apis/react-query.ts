import {
  getMatchDetail,
  getMatches,
  getMostInfo,
  getSummoner,
} from "./endpotins";

const summonerKey = "summoner";
const matchDetailKey = "matchDetail";
const matchesKey = "matches";
const mostInfoKey = "mostInfo";

export const getSummonerQuery = () => ({
  queryKey: [summonerKey],
  queryFn: async (summoner: string) => {
    const { data } = await getSummoner(summoner);
    return data;
  },
});

export const getMatchDetailQuery = () => ({
  queryKey: [matchDetailKey],
  queryFn: async (summoner: string, gameId: string) => {
    const { data } = await getMatchDetail(summoner, gameId);
    return data;
  },
});

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
