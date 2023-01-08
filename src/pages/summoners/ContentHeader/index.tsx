import { Summoner } from "@app/apis/types";
import { formatNumber } from "@app/utils/functions";
import React from "react";
import styled from "styled-components";
import TierList from "./TierList";

interface Props {
  summoner: Summoner;
}

const ContentHeader = ({ summoner }: Props) => {
  const {
    name,
    ladderRank,
    level,
    previousTiers,
    profileBackgroundImageUrl,
    profileBorderImageUrl,
    profileImageUrl,
  } = summoner;
  return (
    <Container>
      <InnerContainer>
        <TierList previousTiers={previousTiers} />
        <UserContainer>
          <ImgContainer>
            {/* FIXME 이미지 수정 해야함 시간 지체 해서 일단 패스 */}
            <ProfileImageContainer img={profileBorderImageUrl}>
              <ImgCenter>
                <ProfileImage src={profileImageUrl} />
              </ImgCenter>
              <LevelContainer>{level}</LevelContainer>
            </ProfileImageContainer>
          </ImgContainer>
          <NameContainer>
            <Name>{name}</Name>
            <Ranking>
              레더 랭킹 <span>{formatNumber(ladderRank.rank)}</span> 위
              {`(상위 ${ladderRank.rankPercentOfTop}%)`}
            </Ranking>
          </NameContainer>
        </UserContainer>
      </InnerContainer>
    </Container>
  );
};

export default ContentHeader;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.paleGray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.silver};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.xl};
`;

const LevelContainer = styled.div`
  top: 0;
  width: 24px;
  height: 40.5px;
  background-color: #1f8ecd;
  position: absolute;
  transform: rotate(90deg);

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 0.8rem solid #1f8ecd;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 0.8rem solid #1f8ecd;
  }
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
  color: #657070;
  span {
    font-weight: bold;
  }
`;

const ProfileImageContainer = styled.div<{ img: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
`;

const ImgCenter = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 100px;
  height: auto;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;
