import { matchesChampions, MatchesDTO } from "@app/apis/types";
import { sortByGames } from "@app/utils/functions";
import React from "react";
import styled from "styled-components";
import ChampionComponent from "./ChampionComponent";

interface Props {
  champions: MatchesDTO["champions"];
}

const Champions = ({ champions }: Props) => {
  const renderChampions = () => {
    return sortByGames(champions, "desc").map((champion: matchesChampions) => {
      return <ChampionComponent key={champion.id} champion={champion} />;
    });
  };

  return <Container>{renderChampions()}</Container>;
};

export default Champions;

const Container = styled.div`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.silver};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
