import React from "react";
import styled, { css } from "styled-components";
import { gameType } from "../types";

interface Props {
  className?: string;
  activeTab: gameType;
  setActiveTab: React.Dispatch<React.SetStateAction<gameType>>;
}

const TabComponent = ({ activeTab, setActiveTab, className }: Props) => {
  const active1 = "all";
  const active2 = "solo";
  const active3 = "free";

  const handleSelectedTab = (selectedTab: gameType) => {
    setActiveTab(selectedTab);
  };

  return (
    <Container className={className}>
      <TabContainer>
        <Tab
          onClick={() => handleSelectedTab(active1)}
          isActive={activeTab === active1}
        >
          전체
        </Tab>
        <Tab
          onClick={() => handleSelectedTab(active2)}
          isActive={activeTab === active2}
        >
          솔로게임
        </Tab>
        <Tab
          onClick={() => handleSelectedTab(active3)}
          isActive={activeTab === active3}
        >
          자유랭크
        </Tab>
      </TabContainer>
    </Container>
  );
};

export default TabComponent;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.offWhite};
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
`;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div<{ isActive: boolean }>`
  padding: 1rem 0;
  width: max-content;
  margin-left: 2.4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  border-bottom: 0.2rem solid transparent;
  :first-child {
    margin-left: 1.6rem;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-bottom: 0.2rem solid ${theme.colors.skyblue};
      font-weight: bold;
      color: ${theme.colors.skyblue};
    `}

  :hover {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.skyblue};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.skyblue};
  }
`;
