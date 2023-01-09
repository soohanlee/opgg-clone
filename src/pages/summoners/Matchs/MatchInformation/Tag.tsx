import React from "react";
import styled, { css } from "styled-components";

interface Props {
  children: React.ReactNode;
  opScoreBadge?: boolean;
  largestMultiKillString?: boolean;
}

const Tag = ({ children, opScoreBadge, largestMultiKillString }: Props) => {
  return (
    <Container
      opScoreBadge={opScoreBadge}
      largestMultiKillString={largestMultiKillString}
    >
      {children}
    </Container>
  );
};

export default Tag;

interface ContainerProps {
  opScoreBadge?: boolean;
  largestMultiKillString?: boolean;
}

const Container = styled.div<ContainerProps>`
  border: 0.1rem solid;
  border-radius: 0.9rem;
  padding: 0.3rem 0.5rem;
  ${({ largestMultiKillString }) =>
    largestMultiKillString &&
    css`
      background-color: #ec4f48;
      border-color: #bf3b36;
    `};

  ${({ opScoreBadge }) =>
    opScoreBadge &&
    css`
      background-color: #8c51c5;
      border-color: #7f3590;
    `};

  color: ${({ theme }) => theme.colors.white};
`;
