import React, { Suspense } from "react";
import styled from "styled-components";
import SearchUserComponent from "./SearchUserComponent";
import TabComponent from "./Tab";
import { searchTab } from "./type";
import { recentSearchUser } from "@app/stores/recentSearchStore";
import { observer } from "mobx-react-lite";
import { recentSearchStore } from "@app/stores/recentSearchStore";
import CurrentSearch from "../CurrentSearch";
import { ErrorBoundary } from "../ErrorBoundary";

const RecentSearchComponent = observer(() => {
  const [activeTab, setActiveTab] = React.useState<searchTab>("recent");

  const getSearchUsers = recentSearchStore.recentSearches;
  const likedUsers = recentSearchStore.likedSearchUsers;

  const renderSearchUsers = () => {
    if (getSearchUsers.length === 0) {
      return <EmptyContainer>최근에 본 소환사가 없습니다.</EmptyContainer>;
    } else {
      return getSearchUsers.map((user: recentSearchUser) => {
        return (
          <SearchUserComponent
            isLikedComponent={true}
            key={user.name}
            isLiked={user.isLiked}
            name={user.name}
          />
        );
      });
    }
  };

  const renderLikedUsers = () => {
    if (likedUsers.length === 0) {
      return (
        <EmptyContainer>
          관심있는 소환사에 Bookmark 즐겨찾기를 하여 편리하게 정보를 받아보세요.
        </EmptyContainer>
      );
    } else {
      return likedUsers.map((likedUser) => {
        return (
          <SearchUserComponent
            isLikedComponent={false}
            key={likedUser.name}
            isLiked={likedUser.isLiked}
            name={likedUser.name}
          />
        );
      });
    }
  };

  const renderSwitchComponent = () => {
    if (activeTab === "recent") {
      return renderSearchUsers();
    } else {
      return renderLikedUsers();
    }
  };

  if (recentSearchStore.input.length > 0) {
    return (
      <Container>
        <ErrorBoundary>
          <Suspense fallback={<div>로딩중</div>}>
            <CurrentSearch input={recentSearchStore.input} />
          </Suspense>
        </ErrorBoundary>
      </Container>
    );
  } else {
    return (
      <Container>
        <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderSwitchComponent()}
      </Container>
    );
  }
});

export default RecentSearchComponent;

const Container = styled.nav`
  position: absolute;
  width: 26rem;
  right: 0;
  top: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.4rem 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const EmptyContainer = styled.div`
  display: flex;
  padding: 4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  word-break: keep-all;
`;
