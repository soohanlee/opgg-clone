import { Position } from "@app/apis/types";
import { getPositionImg, TPosition } from "@app/utils/functions";
import React from "react";
import styled from "styled-components";
import OriginOnlyWinRatingNumber from "@app/pages/summoners/components/OnlyWinRatingNumber";

interface Props {
  data: Position;
  positionRate: number;
}

const PositionComponent = ({ data, positionRate }: Props) => {
  const { losses, position, positionName, wins } = data;

  return (
    <Container>
      <ImgContainer>
        <Img src={getPositionImg(position as TPosition)} />
      </ImgContainer>

      <InfoContainer>
        <Name>{positionName}</Name>
        <Wrapper>
          <PositionRate>{positionRate}%</PositionRate>
          <WinRatingNumberContinaer>
            승률 <OnlyWinRatingNumber wins={wins} losses={losses} />
          </WinRatingNumberContinaer>
        </Wrapper>
      </InfoContainer>
    </Container>
  );
};

export default PositionComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 0.3rem;
  font-weight: bold;
`;

const InfoContainer = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const WinRatingNumberContinaer = styled.div`
  padding-left: 1rem;
  display: flex;
`;

const OnlyWinRatingNumber = styled(OriginOnlyWinRatingNumber)`
  font-size: ${({ theme }) => theme.fontSizes.xs};

  display: flex;
  margin-left: 0.4rem;
`;

const PositionRate = styled.div`
  color: ${({ theme }) => theme.colors.skyblue};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding-right: 1rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.silver};
  font-weight: bold;
`;
