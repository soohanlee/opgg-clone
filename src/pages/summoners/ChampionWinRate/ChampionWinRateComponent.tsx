import { MostChampion } from "@app/apis/types";
import ProfileImg from "@app/components/ProfileImg";
import { getColorFromRatio, getWinRateColor } from "@app/utils/color";
import { kdaCalculator, winRate } from "@app/utils/functions";
import styled from "styled-components";

interface Props {
  champion: MostChampion;
  className?: string;
}

const ChampionWinRateComponent = ({ champion, className }: Props) => {
  const { name, imageUrl, games, kills, deaths, assists, wins, losses, cs } =
    champion;

  return (
    <Container className={className}>
      <Img width={45} img={imageUrl} />

      <Wrapper space={22}>
        <Name>{name}</Name>
        <Cs>CS {cs} </Cs>
      </Wrapper>
      <Wrapper space={28} width={80}>
        <KDA
          color={getColorFromRatio(
            Number(kdaCalculator(kills, assists, deaths))
          )}
        >
          {kdaCalculator(kills, assists, deaths)}:1 평점
        </KDA>
        <div>
          <Kills>{kills}</Kills>
          {` / `}
          <Deaths>{deaths}</Deaths>
          {` / `}
          <Assists>{assists}</Assists>
        </div>
      </Wrapper>
      <Wrapper space={0}>
        <WinRate color={getWinRateColor(winRate(wins, losses))}>{`${winRate(
          wins,
          losses
        )}%`}</WinRate>
        <TotalGames>{games}게임</TotalGames>
      </Wrapper>
    </Container>
  );
};

export default ChampionWinRateComponent;

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

const Wrapper = styled.div<{ space: number; width?: number }>`
  margin-right: ${({ space }) => space}px;
  ${({ width }) => width && `min-width: ${width}px`};
  width: 100%;
  overflow: hidden;
`;

const Name = styled.div`
  min-width: 6.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Cs = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const KDAText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const KDA = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  color: ${({ theme, color }) => (color ? color : theme.colors.darkGray)};
`;

const Kills = styled(KDAText)``;

const Deaths = styled(KDAText)``;

const Assists = styled(KDAText)``;

const WinRate = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ color, theme }) => (color ? color : theme.colors.darkGray)};
  font-weight: bold;
`;

const TotalGames = styled.div``;
