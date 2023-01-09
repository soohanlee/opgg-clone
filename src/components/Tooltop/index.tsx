import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Container
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <TooltipText className="tooltip-text">{text}</TooltipText>}
    </Container>
  );
};

export default Tooltip;

const Container = styled.div`
  position: relative;
`;

const TooltipText = styled.div`
  position: absolute;
  bottom: 3rem;
  padding: 3rem;
  background-color: #222727;
  left: 0;
  color: ${({ theme }) => theme.colors.white};
`;
