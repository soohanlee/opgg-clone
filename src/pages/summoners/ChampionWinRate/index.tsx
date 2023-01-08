import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useMostInfoQuery } from "@app/hooks/queries/useMostInfo";
import { sortMostChampionsGames } from "@app/utils/functions";
import OriginChampionWinRateComponent from "./ChampionWinRateComponent";
import OrignRecentWinRateComponent from "./RecentWinRateComponent";
import ChampionWinRateTab from "./ChampionWinRateTab";
import ComponentWrap from "./ComponentWrap";

const ChampionWinRate = () => {
  const params = useParams();
  const { data } = useMostInfoQuery(params.summonerName!);

  return (
    <Container>
      <ComponentWrap
        champions={data!.champions}
        recentWinRate={data!.recentWinRate}
        defaultTab="championWinRate"
      />
      <ComponentWrap
        champions={data!.champions}
        recentWinRate={data!.recentWinRate}
        defaultTab="recentWinRate"
      />
    </Container>
  );
};

export default ChampionWinRate;

const Container = styled.div`
  width: 100%;
`;

const WrapContainer = styled.div`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
  margin-bottom: 4.6rem;
`;

const RecentWinRateComponent = styled(OrignRecentWinRateComponent)`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.silver};
  &:nth-child(2) {
    border-top: 0;
  }
`;

const ChampionWinRateComponent = styled(OriginChampionWinRateComponent)`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.silver};
  &:nth-child(2) {
    border-top: 0;
  }
`;
