import React from "react";
import styled, { css } from "styled-components";
import { championSelectedType } from "./types";

interface Props {
  activeTab: championSelectedType;
  setActiveTab: React.Dispatch<React.SetStateAction<championSelectedType>>;
}

const ChampionWinRateTab = ({ activeTab, setActiveTab }: Props) => {
  const handleClickTab = (selectedData: championSelectedType) => {
    setActiveTab(selectedData);
  };

  const active1 = "championWinRate";
  const active2 = "recentWinRate";

  return (
    <Container>
      <Tab
        onClick={() => handleClickTab(active1)}
        isActive={activeTab === active1}
      >
        챔피언 승률
      </Tab>
      <Tab
        onClick={() => handleClickTab(active2)}
        isActive={activeTab === active2}
      >
        7일간 랭크 승률
      </Tab>
    </Container>
  );
};

export default ChampionWinRateTab;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Tab = styled.div<{ isActive: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightestGray};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      font-weight: bold;
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.lightestGray};
    `};

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      border-bottom: 0.1rem solid ${theme.colors.silver};
    `}

  text-align: center;
  padding: 1.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  :last-child {
    border-left: 0.1rem solid ${({ theme }) => theme.colors.silver};
  }
`;
