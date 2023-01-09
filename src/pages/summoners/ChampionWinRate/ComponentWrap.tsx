import { MostInfoDTO } from "@app/apis/types";
import { sortByGames, sortChampionGamesCount } from "@app/utils/functions";
import { useState } from "react";
import styled from "styled-components";
import OriginChampionWinRateComponent from "./ChampionWinRateComponent";
import ChampionWinRateTab from "./ChampionWinRateTab";
import RecentWinRateComponent from "./RecentWinRateComponent";
import { championSelectedType } from "./types";

interface Props {
  champions: MostInfoDTO["champions"];
  recentWinRate: MostInfoDTO["recentWinRate"];
  defaultTab: championSelectedType;
}

const ComponentWrap = ({ champions, recentWinRate, defaultTab }: Props) => {
  const [activeTab, setActiveTab] = useState<championSelectedType>(defaultTab);

  const renderChampionWinRates = () => {
    return sortByGames(champions!, "desc")
      .slice(0, 7)
      .map((champion, index) => {
        return (
          <ChampionWinRateComponent
            key={`${champion.key}${index}`}
            champion={champion}
          />
        );
      });
  };

  const renderRecentWinRates = () => {
    return sortChampionGamesCount(recentWinRate!).map((champion, index) => {
      return (
        <RecentWinRateComponent
          key={`${champion.key}${index}`}
          champion={champion}
        />
      );
    });
  };

  return (
    <Container>
      <WrapContainer>
        <ChampionWinRateTab setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "championWinRate"
          ? renderChampionWinRates()
          : renderRecentWinRates()}
      </WrapContainer>
    </Container>
  );
};

export default ComponentWrap;

const Container = styled.div`
  width: 100%;
`;

const WrapContainer = styled.div`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
  margin-bottom: 4.6rem;
`;

const ChampionWinRateComponent = styled(OriginChampionWinRateComponent)`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.silver};
  &:nth-child(2) {
    border-top: 0;
  }
`;
