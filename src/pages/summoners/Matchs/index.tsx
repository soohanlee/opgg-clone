import { ErrorBoundary } from "@app/components/ErrorBoundary";
import { useMatchesQuery } from "@app/hooks/queries/useMatchesData";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MatchInformation from "./MatchInformation";
import MatchStatistics from "./MatchStatistics";
import TabComponent from "./Tab";
import { gameType } from "./types";

const Matchs = () => {
  const [activeTab, setActiveTab] = React.useState<gameType>("all");

  return (
    <Container>
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      <ErrorBoundary>
        <Suspense fallback={"로딩중"}>
          <MatchWrapper activeTab={activeTab} />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default Matchs;

interface MatchWrapperProps {
  activeTab: gameType;
}

const MatchWrapper = ({ activeTab }: MatchWrapperProps) => {
  const changeActiveTab = (activeTab: gameType) => {
    if (activeTab === "all") {
      return "전체";
    } else if (activeTab === "solo") {
      return "솔랭";
    } else if (activeTab === "free") {
      return "자유 5:5 랭크";
    }
  };

  const params = useParams();

  const { data: matchesData } = useMatchesQuery(params.summonerName!);

  const filteredData = matchesData?.games.filter((game) => {
    const gameType = changeActiveTab(activeTab);
    if (gameType === "전체") return true;
    if (game.gameType === gameType) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <MatchStatistics matchesData={matchesData!} />
      <MatchInformation games={filteredData!} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
