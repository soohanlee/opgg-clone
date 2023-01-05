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

export const KDA_THRESHOLDS = {
  "3.00": "#2daf7f",
  "4.00": "#1f8ecd",
  "5.00": "#e19205",
};

export const WIN_RATE_THRESHOLD = "60%";
export const WIN_RATE_COLOR = "#c6443e";

export const RATING_THRESHOLD = "6.0";
export const RATING_COLOR = "#e19205";
