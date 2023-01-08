import styled, { css } from "styled-components";
import { searchTab } from "./type";

interface TabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<searchTab>>;
}

const TabComponent = ({ activeTab, setActiveTab }: TabProps) => {
  const active1 = "recent";
  const active2 = "liked";

  const handleClickTab = (selectedData: searchTab) => {
    setActiveTab(selectedData);
  };

  return (
    <TabContainer>
      <Tab
        onClick={() => handleClickTab(active1)}
        isActive={activeTab === active1}
      >
        최근검색
      </Tab>
      <Tab
        onClick={() => handleClickTab(active2)}
        isActive={activeTab === active2}
      >
        즐겨찾기
      </Tab>
    </TabContainer>
  );
};

export default TabComponent;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div<{ isActive: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      font-weight: bold;
      color: ${theme.colors.darkGray};
      background-color: ${theme.colors.white};
    `};

  text-align: center;
  padding: 1.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
