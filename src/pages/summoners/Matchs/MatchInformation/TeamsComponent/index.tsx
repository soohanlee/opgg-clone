import { FellowPlayer, Team } from "@app/apis/types";
import React from "react";
import TeamComponent from "./TeamComponent";
import styled from "styled-components";

interface Props {
  teams: Team[];
}

const TeamsComponent = ({ teams }: Props) => {
  const renderTeam = (players: FellowPlayer[]) => {
    return players.map((item) => {
      return <TeamComponent key={item.summonerId} fellowPlayer={item} />;
    });
  };

  return (
    <Container>
      <Wrapper>{renderTeam(teams[0].players)}</Wrapper>
      <Wrapper>{renderTeam(teams[1].players)}</Wrapper>
    </Container>
  );
};

export default TeamsComponent;

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  :first-child {
    margin-right: 0.8rem;
  }
`;
