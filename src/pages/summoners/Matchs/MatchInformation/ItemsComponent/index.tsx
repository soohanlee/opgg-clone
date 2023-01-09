import { ImageObj, Ward } from "@app/apis/types";
import React from "react";
import styled, { css } from "styled-components";
import { IGameResult } from "../MatchInfoComponent";
import wardRed from "@app/assets/images/icon-ward-red.svg";
import wardBlue from "@app/assets/images/icon-ward-blue.svg";
import {
  changeArrayOrder,
  fillItemsArrayUntilNumber,
  nameParseFromImg,
} from "@app/utils/functions";
import Tooltip from "@app/components/Tooltop";

interface Props {
  items: ImageObj[];
  ward: Ward;
  isBlueTeam: boolean;

  isWin?: boolean;
  needRenew?: boolean;
}

const ItemsComponent = ({
  items,
  isWin,
  needRenew,
  ward,
  isBlueTeam,
}: Props) => {
  const renderItems = () => {
    const index = items.findIndex(
      (item) =>
        nameParseFromImg(item.imageUrl) === "3340" ||
        nameParseFromImg(item.imageUrl) === "3364"
    );

    const newItems = fillItemsArrayUntilNumber(items, 8);

    return changeArrayOrder<ImageObj>(newItems, index, 3).map((item, index) => {
      if (item.imageUrl === "") {
        return <ImgContainer isWin={isWin} needRenew={needRenew} />;
      } else {
        return (
          <Tooltip text={nameParseFromImg(item.imageUrl) || ""}>
            <ImgContainer isWin={isWin} needRenew={needRenew}>
              <Img
                key={`${item.imageUrl}${index}`}
                src={item.imageUrl}
                alt={item.imageUrl}
              />
            </ImgContainer>
          </Tooltip>
        );
      }
    });
  };

  return (
    <Container>
      <ItemContainer>{renderItems()}</ItemContainer>

      <Text>
        <WardImg src={isBlueTeam ? wardBlue : wardRed} />
        제어 와드{ward.visionWardsBought}
      </Text>
    </Container>
  );
};

export default ItemsComponent;

const Container = styled.div`
  max-width: 10rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.7rem;
`;

const ImgContainer = styled.div<IGameResult>`
  background-color: #cb9e9a;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  max-width: 2.2rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;

  ${({ isWin }) =>
    isWin &&
    css`
      background-color: #7aa5c3;
    `}

  ${({ needRenew }) =>
    needRenew &&
    css`
      background-color: #979797;
    `}
`;

const Img = styled.img`
  border-radius: 0.2rem;
  width: 100%;
  height: auto;
`;

const Text = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;

  justify-content: center;
  align-items: center;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`;

const WardImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;
