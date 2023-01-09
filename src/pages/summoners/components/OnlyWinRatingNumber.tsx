import { getWinRateColor } from "@app/utils/color";
import { winRate } from "@app/utils/functions";
import React from "react";
import styled from "styled-components";

interface Props {
  wins: number;
  losses: number;
  withBracket?: boolean;
  className?: string;
}

const OnlyWinRatingNumber = ({
  wins,
  losses,
  withBracket,
  className,
}: Props) => {
  const renderContent = (content: number) => {
    if (withBracket) {
      return `(${content}%)`;
    }
    return `${content}%`;
  };

  return (
    <WinRate
      className={className}
      color={getWinRateColor(winRate(wins, losses))}
    >
      {renderContent(winRate(wins, losses))}
    </WinRate>
  );
};

export default OnlyWinRatingNumber;

const WinRate = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ color, theme }) => (color ? color : theme.colors.darkGray)};
  font-weight: bold;
`;
