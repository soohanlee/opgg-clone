import styled from "styled-components";
import Stats from "./Stats";
import Champions from "./Champions";
import Positions from "./Positions";
import { MatchesDTO } from "@app/apis/types";

interface Props {
  matchesData: MatchesDTO;
}

const MatchStatistics = ({ matchesData }: Props) => {
  return (
    <Container>
      <Stats summary={matchesData!.summary} />
      <Champions champions={matchesData!.champions} />
      <Positions positions={matchesData!.positions} />
    </Container>
  );
};

export default MatchStatistics;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestGray};
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
  border-top: 0;
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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
