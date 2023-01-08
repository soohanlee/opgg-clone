import { theme } from "@app/styles/Theme";

const KDA_THRESHOLDS = {
  "3.00": "#2daf7f",
  "4.00": "#1f8ecd",
  "5.00": "#e19205",
};

const WIN_RATE_THRESHOLD = 60;
const WIN_RATE_COLOR = "#c6443e";

const RATING_THRESHOLD = 6;
const RATING_COLOR = "#e19205";

export const getStatColor = (
  stat: number,
  threshold: number,
  color: string
) => {
  return stat >= threshold ? color : "";
};

export const getWinRateColor = (winRate: number): string => {
  if (winRate >= WIN_RATE_THRESHOLD) {
    return WIN_RATE_COLOR;
  }
  return "#5e5e5e";
};

export const getColorFromRatio = (ratio: number) => {
  if (ratio >= 5.0) {
    return theme.colors.golden;
  } else if (ratio >= 4.0) {
    return theme.colors.skyblue;
  } else if (ratio >= 3.0) {
    return theme.colors.emerald;
  }
  return theme.colors.darkGray;
};
