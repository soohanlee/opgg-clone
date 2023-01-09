import {
  ChampionWinRate,
  ImageObj,
  Position,
  Team,
  TierRank,
} from "@app/apis/types";
import ADCImg from "@app/assets/images/icon-mostposition-adc.svg";
import JNGImg from "@app/assets/images/icon-mostposition-jng.svg";
import MIDImg from "@app/assets/images/icon-mostposition-mid.svg";
import SUPImg from "@app/assets/images/icon-mostposition-sup.svg";
import TOPImg from "@app/assets/images/icon-mostposition-top.svg";
import { positionOrder } from "@app/config/constants";

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
  if (kda > 0) {
    return kda.toFixed(2);
  } else {
    return 0;
  }
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

export function sortByGames<T extends { games: number }>(
  arr: T[],
  sortDirection: "asc" | "desc"
): T[] {
  return arr.sort(function (a, b) {
    if (sortDirection === "asc") {
      return a.games - b.games;
    } else {
      return b.games - a.games;
    }
  });
}

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

export const sortFormPosition = (positions: Position[]) => {
  return positions.sort(
    (a, b) =>
      positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position)
  );
};

const positionImgObject = {
  TOP: TOPImg,
  JNG: JNGImg,
  MID: MIDImg,
  SUP: SUPImg,
  ADC: ADCImg,
};

export type TPosition = "TOP" | "JNG" | "MID" | "ADC" | "SUP";

export const getPositionImg = (position: TPosition): string => {
  return positionImgObject[position] ? positionImgObject[position] : "";
};

export const gamePercentages = (totalGames: number, games: number) => {
  return Math.floor((games / totalGames) * 100);
};

// gameTime = seconds
export const convertGamePlayTime = (gameTime: number) => {
  const playTimeMinutes = Math.floor(gameTime / 60);
  const playTimeSeconds = gameTime % 60;

  return {
    minutes: playTimeMinutes,
    seconds: playTimeSeconds,
  };
};

// earlierTime = Epoch timestamp
export const diffTime = (earlierTime: number) => {
  const _earlierTime = new Date(earlierTime).getTime();
  const _currentTime = new Date().getTime() / 1000;

  const diffInMilliseconds = _currentTime - _earlierTime;

  return diffInMilliseconds;
};

export const convertDiffTimeToText = (diffInMilliseconds: number) => {
  const diffInSeconds = Math.floor(diffInMilliseconds / 60);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInWeeks / 4);
  const diffInYears = Math.floor(diffInMonths / 12);

  let diffInText = "";
  if (diffInYears > 0) {
    diffInText = `${diffInYears}년 전`;
  } else if (diffInMonths > 0) {
    diffInText = `${diffInMonths}달 전`;
  } else if (diffInWeeks > 0) {
    diffInText = `${diffInWeeks}주 전`;
  } else if (diffInDays > 0) {
    diffInText = `${diffInDays}일 전`;
  } else if (diffInHours > 0) {
    diffInText = `${diffInHours}시간 전`;
  } else if (diffInMinutes > 0) {
    diffInText = `${diffInMinutes}분 전`;
  } else if (diffInSeconds > 0) {
    diffInText = `${diffInSeconds}초 전`;
  } else {
    diffInText = "";
  }

  return diffInText;
};

export const nameParseFromImg = (img: string) => {
  let pathComponents = img.split("/");
  let fileName = pathComponents.pop();

  return fileName?.split(".")[0];
};

//team1 blue team
export const summonerNameExistsInBlueTeam = (
  teams: Team[],
  summonerName: string
) => {
  // Find the team with teamId: 1
  const team = teams.find((team) => team.teamId === 1);

  if (team) {
    return team.players.some((player) => player.summonerName === summonerName);
  }

  return false;
};

export const changeArrayOrder = <T>(
  array: T[],
  oldIndex: number,
  newIndex: number
): T[] => {
  const newArray = [...array];
  const [removed] = newArray.splice(oldIndex, 1);
  newArray.splice(newIndex, 0, removed);
  return newArray;
};

export const fillItemsArrayUntilNumber = (
  array: ImageObj[],
  number: number
): ImageObj[] => {
  const newArray = [...array];

  if (array.length < number) {
    for (let i = newArray.length; i < number; i++) {
      newArray.push({ imageUrl: "" });
    }
  }

  return newArray;
};
