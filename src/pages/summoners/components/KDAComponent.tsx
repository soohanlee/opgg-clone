import React from "react";
import styled, { css } from "styled-components";

interface Props {
  kills: number;
  deaths: number;
  assists: number;
  className?: string;
  isRedPoint?: boolean;
}

const KDAComponent = ({
  kills,
  deaths,
  assists,
  className,
  isRedPoint,
}: Props) => {
  return (
    <Container className={className}>
      <Kills>{kills}</Kills>
      {` / `}
      <Deaths isRedPoint={isRedPoint}>{deaths}</Deaths>
      {` / `}
      <Assists>{assists}</Assists>
    </Container>
  );
};

export default KDAComponent;

const Container = styled.div``;

const KDAText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const Kills = styled(KDAText)``;

const Deaths = styled(KDAText)<{ isRedPoint?: boolean }>`
  ${({ isRedPoint, theme }) =>
    isRedPoint &&
    css`
      color: ${theme.colors.rustRed};
    `}
`;

const Assists = styled(KDAText)``;
