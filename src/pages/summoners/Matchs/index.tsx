import { ErrorBoundary } from "@app/components/ErrorBoundary";
import React, { Suspense } from "react";
import styled from "styled-components";
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
          <MatchStatistics />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default Matchs;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
