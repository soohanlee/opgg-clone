import { TierRank } from "@app/apis/types";
import { sortTierRank } from "@app/utils/functions";
import styled from "styled-components";

interface Props {
  previousTiers: TierRank[];
}

const TierList = ({ previousTiers }: Props) => {
  const renderTierList = () => {
    return sortTierRank(previousTiers).map((item, index) => {
      return (
        <Tier key={index}>
          <span>{`S${item.season} `}</span>
          <span>{`${item.tier}`}</span>
        </Tier>
      );
    });
  };

  return <TierContainer>{renderTierList()}</TierContainer>;
};

export default TierList;

const TierContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tier = styled.div`
  background-color: #e0e3e3;
  padding: 0.2rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-left: ${({ theme }) => theme.spacing.md};
  border: solid 1px #d0d3d4;
  color: #657070;
  border-radius: 0.2rem;

  span {
    :first-child {
      font-weight: bold;
    }
  }
`;
