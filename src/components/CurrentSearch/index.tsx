import { useSummonersQuery } from "@app/hooks/queries/useSummonersData";
import useDebounceValue from "@app/hooks/useDebounceValue";
import UserComponent from "./UserComponent";
import { observer } from "mobx-react-lite";
import { autoCompleteStore } from "@app/stores/autoCompleteStore";
import styled from "styled-components";
import { useEffect } from "react";

const CurrentSearch = observer(() => {
  const debouncedSearchQuery = useDebounceValue(autoCompleteStore.input, 300);
  const { data } = useSummonersQuery(debouncedSearchQuery);

  useEffect(() => {
    autoCompleteStore.setFilteredUsers(
      data?.summoners.filter((user) => {
        return user.name.toLowerCase().includes(autoCompleteStore.input);
      }) || []
    );
  }, [data?.summoners]);

  const renderUsers = () => {
    return autoCompleteStore.filteredUsers.map((user, index) => {
      return (
        <UserComponent
          isActive={autoCompleteStore.activeIndex === index}
          key={user.name}
          summoner={user}
        />
      );
    });
  };

  return <Container>{renderUsers()}</Container>;
});

export default CurrentSearch;

const Container = styled.nav`
  position: absolute;
  width: 26rem;
  right: 0;
  top: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.4rem 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
