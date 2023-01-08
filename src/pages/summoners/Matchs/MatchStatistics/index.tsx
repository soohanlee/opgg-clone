import styled from "styled-components";
import { useMatchesQuery } from "@app/hooks/queries/useMatchesData";
import { useParams } from "react-router-dom";
import Stats from "./Stats";
import Champions from "./Champions";
import Positions from "./Positions";

const MatchStatistics = () => {
  const params = useParams();

  const { data: matchesData } = useMatchesQuery(params.summonerName!);
  console.log(matchesData);
  return (
    <Container>
      <Stats summary={matchesData!.summary} />
      <Champions />
      <Positions />
    </Container>
  );
};

export default MatchStatistics;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestGray};
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
  border-top: 0;
  display: flex;
  > div {
    :nth-child(1) {
      width: 40%;
    }
    :nth-child(2) {
      width: 33%;
    }
    :nth-child(3) {
      width: 27%;
    }
  }
`;
