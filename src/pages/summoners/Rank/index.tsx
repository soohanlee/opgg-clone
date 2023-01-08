import { useSummonerQuery } from "@app/hooks/queries/useSummonerData";
import { useParams } from "react-router-dom";
import RankedComponent from "./RankedComponent";
import UnrankedComponent from "./UnrankedComponent";

const Rank = () => {
  const params = useParams();
  const { data } = useSummonerQuery(params.summonerName!);

  const renderLeagues = () => {
    return data!.summoner.leagues.map((league, index) => {
      const { hasResults, wins, losses, tierRank } = league;
      if (hasResults) {
        return (
          <RankedComponent
            key={index}
            tierRank={tierRank}
            wins={wins}
            losses={losses}
          />
        );
      } else {
        return <UnrankedComponent name={tierRank.name} />;
      }
    });
  };

  return <>{renderLeagues()}</>;
};

export default Rank;
