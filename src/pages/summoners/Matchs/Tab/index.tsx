import React from "react";
import styled from "styled-components";

const TabComponent = () => {
  return (
    <Container>
      <Tab isActive>전체</Tab>
      <Tab isActive>솔로게임</Tab>
      <Tab isActive>자유랭크</Tab>
    </Container>
  );
};

export default TabComponent;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
`;

const Tab = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: ${({ isActive }) =>
    isActive ? "0.1rem solid #1f8ecd" : "0.1rem solid #e6e6e6"};
`;
