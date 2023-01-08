import { SummonerDTO } from "@app/apis/types";
import { ErrorBoundary } from "@app/components/ErrorBoundary";
import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ChampionWinRate from "./ChampionWinRate";
import ContentHeader from "./ContentHeader";
import Matchs from "./Matchs";
import Rank from "./Rank";

const Summoners = () => {
  const { summoner } = useLoaderData() as SummonerDTO;

  return (
    <Container>
      <ContentHeader summoner={summoner} />
      <InnerContainer>
        <LeftContainer>
          <ErrorBoundary>
            <Suspense fallback={"로딩중"}>
              <Rank />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={"로딩중"}>
              <ChampionWinRate />
            </Suspense>
          </ErrorBoundary>
        </LeftContainer>
        <RightContainer>
          <Matchs />
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Summoners;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.paleGray};
  padding-bottom: 40rem;
`;

const InnerContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const LeftContainer = styled.div`
  width: 100%;
  max-width: 33.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;
