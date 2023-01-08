import { useSummonersQuery } from "@app/hooks/queries/useSummonersData";
import useDebounceValue from "@app/hooks/useDebounceValue";
import UserComponent from "./UserComponent";
import { observer } from "mobx-react-lite";

interface Props {
  input: string;
}

const CurrentSearch = observer(({ input }: Props) => {
  const debouncedSearchQuery = useDebounceValue(input, 1000);
  const { data } = useSummonersQuery(debouncedSearchQuery);

  const filterSearch =
    data?.summoners.filter((user) => {
      return user.name.toLowerCase().includes(input);
    }) || [];

  const renderUsers = () => {
    return filterSearch.map((user) => {
      return <UserComponent key={user.name} summoner={user} />;
    });
  };

  return <>{renderUsers()}</>;
});

export default CurrentSearch;
