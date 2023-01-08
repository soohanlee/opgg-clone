import { useMatchesQuery } from "@app/hooks/queries/useMatchesData";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TabComponent from "./Tab";
import { gameType } from "./types";

const Matchs = () => {
  const params = useParams();

  const { data: matchesData } = useMatchesQuery(params.summonerName!);

  const [activeTab, setActiveTab] = React.useState<gameType>("all");

  console.log(matchesData);

  return (
    <Container>
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
    </Container>
  );
};

export default Matchs;

const Container = styled.div`
  display: flex;
  width: 100%;
`;
