import React from "react";
import styled from "styled-components";
import {
  recentSearchUser,
  recentSearchStore,
} from "@app/stores/recentSearchStore";
import { useNavigate } from "react-router-dom";

interface Props {
  name: recentSearchUser["name"];
  isLiked: recentSearchUser["isLiked"];
  isLikedComponent: boolean;
}

const SearchUserComponent = ({ name, isLiked, isLikedComponent }: Props) => {
  const navigate = useNavigate();

  const handkeClickLiked = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    recentSearchStore.setToggleLiked(name);
  };

  const handleClickRemove = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (isLikedComponent) {
      recentSearchStore.removeSearch(name);
    } else {
      recentSearchStore.removeLikedSearch(name);
    }
  };

  const handleClickUser = () => {
    navigate(`/summoners/${name}`);
    recentSearchStore.initializeModal();
  };

  return (
    <Container onClick={handleClickUser}>
      <Name>{name}</Name>

      {isLikedComponent && (
        <LikedButton onClick={handkeClickLiked}>
          {isLiked ? (
            <img
              src={
                "https://s-lol-web.op.gg/images/icon/icon-bookmark-on-yellow.svg"
              }
              alt="즐겨찾기 추가"
            />
          ) : (
            <img
              src={"https://s-lol-web.op.gg/images/icon/icon-bookmark.svg"}
              alt="즐겨찾기 제거"
            />
          )}
        </LikedButton>
      )}

      <RemoveButton onClick={handleClickRemove}>
        <img
          src={
            "https://s-lol-web.op.gg/images/icon/icon-close-small.svg?v=1673037181628"
          }
          alt="즐겨찾기 제거"
        />
      </RemoveButton>
    </Container>
  );
};

export default SearchUserComponent;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const Name = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const LikedButton = styled.div`
  min-width: 3rem;
  cursor: pointer;
`;

const RemoveButton = styled.div`
  min-width: 3rem;
  cursor: pointer;
`;
