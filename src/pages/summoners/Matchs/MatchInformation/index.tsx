import { GameInfo, MatchesDTO } from "@app/apis/types";
import MatchInfoComponent from "./MatchInfoComponent";

interface Props {
  games: GameInfo[];
}

const MatchInformation = ({ games }: Props) => {
  const renderMatchInfo = () => {
    return games.map((game) => {
      return <MatchInfoComponent key={game.gameId} game={game} />;
    });
  };

  return <>{renderMatchInfo()}</>;
};

export default MatchInformation;
