import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useMostInfoQuery } from "@app/hooks/queries/useMostInfo";
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
