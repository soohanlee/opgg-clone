import { MostChampion } from "@app/apis/types";
import ProfileImg from "@app/components/ProfileImg";
import styled from "styled-components";
import OriginKDAComponent from "../components/KDAComponent";
import OnlyWinRatingNumber from "../components/OnlyWinRatingNumber";
import OriginWinRateComponent from "../components/WinRateComponent";

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
        <WinRateComponent
          kills={kills}
          deaths={deaths}
          assists={assists}
          isText
          isOne
        />
        <KDAComponent kills={kills} deaths={deaths} assists={assists} />
      </Wrapper>
      <Wrapper space={0}>
        <OnlyWinRatingNumber wins={wins} losses={losses} />
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
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Cs = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const KDAComponent = styled(OriginKDAComponent)`
  text-align: center;
`;

const WinRateComponent = styled(OriginWinRateComponent)`
  text-align: center;
`;

const TotalGames = styled.div`
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;
