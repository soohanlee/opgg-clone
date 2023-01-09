import { Position } from "@app/apis/types";
import { gamePercentages, sortFormPosition } from "@app/utils/functions";
import React from "react";
import styled from "styled-components";
import PositionComponent from "./Position";

interface Props {
  positions: Position[];
}

const Positions = ({ positions }: Props) => {
  const renderPositions = () => {
    const totalGames = positions.reduce(
      (acc, position) => acc + position.games,
      0
    );

    return sortFormPosition(positions).map((position) => {
      const positionRate = gamePercentages(totalGames, position.games);

      return (
        <PositionComponent
          key={position.position}
          data={position}
          positionRate={positionRate}
        />
      );
    });
  };

  return (
    <Container>
      <Title>선호 포지션 (랭크)</Title>
      <PositionContainer>{renderPositions()}</PositionContainer>
    </Container>
  );
};

export default Positions;

const Container = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 2rem;
  width: max-content;
`;

const PositionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
