import React from "react";
import styled from "styled-components";
import { Container, InfoContainer, Rank } from "./styled-components/styled";
import unrankedImg from "@app/assets/images/unranked.png";
import unrankedImg2 from "@app/assets/images/unranked@2x.png";
import unrankedImg3 from "@app/assets/images/unranked@3x.png";

interface Props {
  name: string;
}

const UnrankedComponent = ({ name }: Props) => {
  return (
    <Container>
      <ImgContainer>
        <UnrankedImg />
      </ImgContainer>
      <InfoContainer>
        <Rank>{name}</Rank>
        <UnrankedTitle>Unranked</UnrankedTitle>
      </InfoContainer>
    </Container>
  );
};

export default UnrankedComponent;

const ImgContainer = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  margin-right: 2.4rem;
`;

const UnrankedImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${unrankedImg});

  @media (min-device-pixel-ratio: 2) {
    background-image: url(${unrankedImg2});
  }

  @media (min-device-pixel-ratio: 3) {
    background-image: url(${unrankedImg3});
  }
`;

const UnrankedTitle = styled.div`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
`;
