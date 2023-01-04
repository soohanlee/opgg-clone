import { KDA_THRESHOLDS } from "@app/config/constants";

export const getStatColor = (
  stat: number,
  threshold: number,
  color: string
) => {
  return stat >= threshold ? color : "";
};

export const getKdaColor = (kda: number) => {
  for (const [kdaThreshold, color] of Object.entries(KDA_THRESHOLDS)) {
    if (kda >= parseFloat(kdaThreshold)) {
      return color;
    }
  }
  return "";
};
