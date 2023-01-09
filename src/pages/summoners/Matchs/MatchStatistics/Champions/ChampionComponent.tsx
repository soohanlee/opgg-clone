import { matchesChampions } from "@app/apis/types";
import ProfileImg from "@app/components/ProfileImg";
import OriginOnlyWinRatingNumber from "@app/pages/summoners/components/OnlyWinRatingNumber";
import OriginnWinRateComponent from "@app/pages/summoners/components/WinRateComponent";
import styled from "styled-components";

interface Props {
  champion: matchesChampions;
}

const ChampionComponent = ({ champion }: Props) => {
  const { wins, losses, kills, deaths, assists, imageUrl, name } = champion;

  return (
    <Container>
      <Img width={34} img={imageUrl} />
      <InfoContainer>
        <Name>{name}</Name>
        <Wrapper>
          <OnlyWinRatingNumber wins={wins} losses={losses} />
          <WinLossText>{`(${wins}승 ${losses}패)`}</WinLossText>
          <WinRateComponent
            kills={kills}
            deaths={deaths}
            assists={assists}
            isText
          />
        </Wrapper>
      </InfoContainer>
    </Container>
  );
};

export default ChampionComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled(ProfileImg)`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 0.3rem;
  font-weight: bold;
`;

const InfoContainer = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const WinLossText = styled.span`
  padding: 0 0.5rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.silver};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const WinRateComponent = styled(OriginnWinRateComponent)`
  padding-left: 0.5rem;
`;

const OnlyWinRatingNumber = styled(OriginOnlyWinRatingNumber)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
