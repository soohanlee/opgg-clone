import { getColorFromRatio } from "@app/utils/color";
import { kdaCalculator } from "@app/utils/functions";
import styled from "styled-components";

interface Props {
  kills: number;
  deaths: number;
  assists: number;
  isText?: boolean;
  isOne?: boolean;
  className?: string;
}

const WinRateComponent = ({
  kills,
  deaths,
  assists,
  isText,
  isOne,
  className,
}: Props) => {
  return (
    <WinRate
      className={className}
      color={getColorFromRatio(Number(kdaCalculator(kills, assists, deaths)))}
    >
      {kdaCalculator(kills, assists, deaths)}
      {isOne && `:1`} {isText && `평점`}
    </WinRate>
  );
};

export default WinRateComponent;

interface WinRateProps {
  color?: string;
}

const WinRate = styled.div<WinRateProps>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  color: ${({ theme, color }) => (color ? color : theme.colors.darkGray)};
`;
