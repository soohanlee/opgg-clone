import { FellowPlayer } from "@app/apis/types";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  fellowPlayer: FellowPlayer;
}

const TeamComponent = ({ fellowPlayer }: Props) => {
  return (
    <Container>
      <Img src={fellowPlayer.champion.imageUrl} />
      <Title>
        <ATag to={`/summoners/${fellowPlayer.summonerName}`}>
          {fellowPlayer.summonerName}
        </ATag>
      </Title>
    </Container>
  );
};

export default TeamComponent;

const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  :last-child {
    margin-bottom: 0;
  }
`;
const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.3rem;
`;
const Title = styled.div`
  display: inline-block;
  max-width: 60px;
  vertical-align: middle;
`;

const ATag = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  color: inherit;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
  }
`;
