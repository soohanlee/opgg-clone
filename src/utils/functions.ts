import { ChampionWinRate, MostChampion, TierRank } from "@app/apis/types";

export const totalGame = (wins: number, losses: number) => wins + losses;

export const winRate = (wins: number, losses: number) => {
  const total = totalGame(wins, losses);
  return Math.floor(total === 0 ? 0 : (wins / total) * 100);
};

export const kdaCalculator = (
  kills: number,
  assists: number,
  deaths: number
) => {
  const kda = (kills + assists) / deaths;
  return kda.toFixed(2);
};

export const getTierInfo = (tier: string, shortString: string) => {
  if (shortString === "UNRANKED") return "UNRANKED";
  const splitShortString = shortString.split("");

  return `${tier} ${splitShortString[1]}`;
};

export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const sortTierRank = (tiers: TierRank[]) => {
  return tiers.sort((a, b) => {
    if (a.season > b.season) {
      return -1;
    } else if (a.season < b.season) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const sortMostChampionsGames = (MostChampions: MostChampion[]) => {
  return MostChampions.sort((a, b) => {
    if (a.games > b.games) {
      return -1;
    } else if (a.games < b.games) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const sortChampionGamesCount = (array: ChampionWinRate[]) => {
  return array.sort((a, b) => {
    const aSum = a.wins + a.losses;
    const bSum = b.wins + b.losses;
    if (aSum < bSum) {
      return 1;
    } else if (aSum > bSum) {
      return -1;
    } else {
      return 0;
    }
  });
};
