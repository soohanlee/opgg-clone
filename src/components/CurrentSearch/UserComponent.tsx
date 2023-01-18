import { Link } from "react-router-dom";
import { Summoner } from "@app/apis/types";
import { recentSearchStore } from "@app/stores/recentSearchStore";
import { getTierInfo } from "@app/utils/functions";
import styled from "styled-components";
import OriginProfileImg from "../ProfileImg";
import { autoCompleteStore } from "@app/stores/autoCompleteStore";

interface Props {
  summoner: Summoner;
  isActive: boolean;
}

const UserComponent = ({ summoner, isActive }: Props) => {
  const handleClickUser = () => {
    recentSearchStore.setRecentSearch({ name: summoner.name, isLiked: false });
    recentSearchStore.initializeModal();
    autoCompleteStore.setInput("");
  };

  return (
    <Container
      isActive={isActive}
      to={`/summoners/${summoner.name}`}
      onClick={handleClickUser}
    >
      <ProfileImg img={summoner.profileImageUrl} width={36} />
      <InfoContainer>
        <Name>{summoner.name}</Name>
        <Tier>
          {`${getTierInfo(
            summoner.leagues[0].tierRank.tier,
            summoner.leagues[0].tierRank.shortString
          )} - ${summoner.leagues[0].tierRank.lp}LP`}
        </Tier>
      </InfoContainer>
    </Container>
  );
};

export default UserComponent;

const Container = styled(Link)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.6rem;
  cursor: pointer;
  text-decoration: none;
  :active {
    background-color: ${({ theme }) => theme.colors.offWhite};
  }
  ${({ isActive, theme }) =>
    isActive && `background-color: ${theme.colors.offWhite}`}
`;

const ProfileImg = styled(OriginProfileImg)`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Tier = styled.small`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.darkGray};
`;
