import React from "react";
import styled from "styled-components";

const TierList = () => {
  const renderTierList = () => {
    const tierList = [
      "IRON",
      "S3 BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "MASTER",
      "GRANDMASTER",
      "CHALLENGER",
    ];
    return tierList.map((tier, index) => {
      return <Tier key={index}>{tier}</Tier>;
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
  padding: 0.4rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sx};
  margin-left: ${({ theme }) => theme.spacing.md};
  color: #657070;
  font-weight: bold;
`;
