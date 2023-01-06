import { SummonerDTO } from "@app/apis/types";
import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import ChampionWinRate from "./ChampionWinRate";
import ContentHeader from "./ContentHeader";
import FreeRank from "./FreeRank";
import Matchs from "./Matchs";
import SoloRank from "./SoloRank";

const Summoners = () => {
  const summonerData = useLoaderData() as SummonerDTO;

  console.log(summonerData);

  return (
    <Container>
      <ContentHeader />
      <InnerContainer>
        <LeftContainer>
          <SoloRank />
          <FreeRank />
          <ChampionWinRate />
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
  background: ${({ theme }) => theme.colors.background};
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
