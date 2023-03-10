import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export const testSummonerName = "일단존버할게요";
export const testGameId = "123";

export const queryKeys = Object.freeze({
  summoner: "summoner",
  summoners: "summoners",
  detail: "detail",
  mostInfo: "mostInfo",
  matches: "matches",
});

export const documentTitle = "롤 전적 검색 OP.GG";

export const positionOrder = ["TOP", "JNG", "MID", "ADC", "SUP"];
