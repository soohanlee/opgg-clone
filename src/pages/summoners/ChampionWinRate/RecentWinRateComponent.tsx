import React from "react";
import styled from "styled-components";
import ProfileImg from "@app/components/ProfileImg";
import { ChampionWinRate } from "@app/apis/types";
import { winRate } from "@app/utils/functions";

interface Props {
  champion: ChampionWinRate;
  className?: string;
}

const RecentWinRateComponent = ({ champion, className }: Props) => {
  const { name, imageUrl, wins, losses } = champion;

  return (
    <Container className={className}>
      <Img width={45} img={imageUrl} />
      <Name>{name}</Name>
      <WinRate>{`${winRate(wins, losses)}%`}</WinRate>

      <Chart>
        <Bar width={winRate(wins, losses)} className="win">
          <Label>{wins}승</Label>
        </Bar>
        <Bar width={100 - winRate(wins, losses)} className="loss">
          <Label>{losses}패</Label>
        </Bar>
      </Chart>
    </Container>
  );
};

export default RecentWinRateComponent;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0.4rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightestGray};
  align-items: center;
`;

const Img = styled(ProfileImg)`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const Name = styled.div`
  min-width: 8rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
`;

const WinRate = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ color, theme }) => (color ? color : theme.colors.darkGray)};
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const Chart = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 20px;
`;

const Bar = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.brightRed};

  &.win {
    background-color: ${({ theme }) => theme.colors.skyblue};
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;

    > div {
      left: 3%;
      right: unset;
    }
  }
  &.loss {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  transform: translate(0, -50%);
`;
