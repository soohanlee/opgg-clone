import { TierRank } from "@app/apis/types";
import {
  Container,
  ImgContainer,
  Img,
  InfoContainer,
  Rank,
  GameCount,
  Tier,
  LP,
  WinRate,
} from "./styled-components/styled";
import React from "react";
import { getTierInfo, totalGame, winRate } from "@app/utils/functions";

interface Props {
  tierRank: TierRank;
  wins: number;
  losses: number;
}

const RankedComponent = ({ tierRank, wins, losses }: Props) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={tierRank.imageUrl} />
      </ImgContainer>
      <InfoContainer>
        <Rank>{tierRank.name}</Rank>
        <GameCount>
          <span>탑</span> {`(총 ${totalGame(wins, losses)}게임)`}
        </GameCount>
        <Tier>{getTierInfo(tierRank.tier, tierRank.shortString)}</Tier>
        <LP>
          <span>{tierRank.lp} LP</span>
          <span>
            / {wins}승 {losses}패
          </span>
        </LP>
        <WinRate>승률 {winRate(wins, losses)}%</WinRate>
      </InfoContainer>
    </Container>
  );
};

export default RankedComponent;
