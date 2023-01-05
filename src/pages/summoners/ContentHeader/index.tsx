import React from "react";
import styled from "styled-components";
import TierList from "./TierList";

const ContentHeader = () => {
  return (
    <Container>
      <InnerContainer>
        <TierList />
        <UserContainer>
          <ImgContainer>
            <Img />
          </ImgContainer>
          <NameContainer>
            <Name>플레이어 아이디</Name>
            <Ranking>
              레더 랭킹<Hilight>363499</Hilight>위 (상위 40.7%)
            </Ranking>
          </NameContainer>
        </UserContainer>
      </InnerContainer>
    </Container>
  );
};

export default ContentHeader;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const InnerContainer = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const UserContainer = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.xl};
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NameContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: #242929;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const Ranking = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Hilight = styled.span``;
