import { GameInfo } from "@app/apis/types";
import OriginProfileImg from "@app/components/ProfileImg";
import { useMatchDetailQuery } from "@app/hooks/queries/useMatchDetailData";
import {
  nameParseFromImg,
  convertDiffTimeToText,
  convertGamePlayTime,
  diffTime,
  summonerNameExistsInBlueTeam,
} from "@app/utils/functions";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import OriginKDAComponent from "../../components/KDAComponent";
import OriginWinRateComponent from "../../components/WinRateComponent";
import ItemsComponent from "./ItemsComponent";
import Tag from "./Tag";
import TeamsComponent from "./TeamsComponent";

interface Props {
  game: GameInfo;
}

const MatchInfoComponent = ({ game }: Props) => {
  const params = useParams();

  const {
    champion,
    createDate,
    gameId,
    gameLength,
    gameType,
    isWin,
    items,
    needRenew,
    peak,
    spells,
    stats,
    summonerName,
  } = game;

  const { data: matchDetailData } = useMatchDetailQuery(summonerName, gameId!);

  const differenceTime = diffTime(createDate);
  const timeText = convertDiffTimeToText(differenceTime);

  const renderGameResultText = () => {
    if (needRenew) return "다시하기";
    if (isWin) return "승리";
    return "패배";
  };

  const renderPlayTime = () => {
    const { minutes, seconds } = convertGamePlayTime(gameLength);
    return `${minutes}분 ${seconds}초`;
  };

  const renderSpells = () => {
    return spells.map((spell) => {
      return (
        <Spell src={spell.imageUrl} alt={nameParseFromImg(spell.imageUrl)} />
      );
    });
  };

  const renderPeaks = () => {
    return peak.map((item) => {
      return <Peak src={item} alt={nameParseFromImg(item)} />;
    });
  };

  const renderTag = () => {
    const largestMultiKillString = stats.general.largestMultiKillString;
    const opScoreBadge = stats.general.opScoreBadge;

    const isMultiKill = largestMultiKillString.length > 1;
    const isOpScoreBadge = opScoreBadge.length > 1;

    return (
      <TagContainer>
        {isMultiKill && (
          <Tag largestMultiKillString>{largestMultiKillString}</Tag>
        )}
        {isOpScoreBadge && <Tag opScoreBadge>{opScoreBadge}</Tag>}
      </TagContainer>
    );
  };

  const isBlueTeam = summonerNameExistsInBlueTeam(
    matchDetailData!.teams,
    params.summonerName!
  );

  return (
    <Container isWin={isWin} needRenew={needRenew}>
      <GameResultContainer>
        <BoldText>{gameType}</BoldText>
        <Text>{timeText}</Text>
        <DivideLine isWin={isWin} needRenew={needRenew} />
        <GameResultText isWin={isWin} needRenew={needRenew}>
          {renderGameResultText()}
        </GameResultText>
        <Text>{renderPlayTime()}</Text>
      </GameResultContainer>
      <ChampionContainer>
        <ChampionWrap>
          <ProfileImg width={46} img={champion.imageUrl} />
          <SpellsContainer>{renderSpells()}</SpellsContainer>
          <SpellsContainer>{renderPeaks()}</SpellsContainer>
        </ChampionWrap>
        <Text>{nameParseFromImg(champion.imageUrl)}</Text>
      </ChampionContainer>
      <WinRateContainer>
        <KDAComponent
          kills={stats.general.kill}
          deaths={stats.general.death}
          assists={stats.general.assist}
          isRedPoint
        />
        <WinRateComponent
          kills={stats.general.kill}
          deaths={stats.general.death}
          assists={stats.general.assist}
          isText
          isOne
        />
        {renderTag()}
      </WinRateContainer>
      <LevelContainer>
        <Text>레벨{champion.level}</Text>
        <Text> {`${stats.general.cs} (${stats.general.csPerMin}) CS`} </Text>
        <BoldText color="#d0021b">
          킬관여 {stats.general.contributionForKillRate}
        </BoldText>
      </LevelContainer>
      <ItemContainer>
        <ItemsComponent
          items={items}
          ward={stats.ward}
          isBlueTeam={isBlueTeam}
          isWin={isWin}
          needRenew={needRenew}
        />
      </ItemContainer>
      <TeamContainer>
        <TeamsComponent teams={matchDetailData!.teams} />
      </TeamContainer>

      <ArrowContainer isWin={isWin} needRenew={needRenew} />
    </Container>
  );
};

export default MatchInfoComponent;

export interface IGameResult {
  isWin?: boolean;
  needRenew?: boolean;
}

const Container = styled.div<IGameResult>`
  background-color: #d6b5b2;
  border: solid 1px #c0aba8;
  height: 96px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;

  > div {
    flex: 1;
  }

  ${({ isWin }) =>
    isWin &&
    css`
      background-color: #b0ceea;
      border: solid 1px #a1b8cd;
    `}

  ${({ needRenew }) =>
    needRenew &&
    css`
      background-color: #b6b6b6;
      border: solid 1px #a7a7a7;
    `}
`;

const Text = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 0.2rem;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`;

const BoldText = styled(Text)<{ isBold?: boolean }>`
  font-weight: bold;
`;

const GameResultContainer = styled.div`
  text-align: center;
  width: 7rem;
`;

const GameResultText = styled(BoldText)<IGameResult>`
  color: #d0021b;
  ${({ isWin }) =>
    isWin &&
    css`
      color: #1e5f9c;
    `}

  ${({ needRenew }) =>
    needRenew &&
    css`
      color: #000000;
    `};
`;

const DivideLine = styled.div<IGameResult>`
  border-bottom: solid 1px #d0a6a5;
  width: 2.7rem;
  margin: 0.5rem auto;

  ${({ isWin }) =>
    isWin &&
    css`
      border-color: #94b9d6;
    `};

  ${({ needRenew }) =>
    needRenew &&
    css`
      border-color: #555555;
    `};
`;

const ChampionContainer = styled.div`
  text-align: center;
`;

const ChampionWrap = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

const SpellsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spell = styled.img`
  max-width: 2.2rem;
`;

const Peak = styled(Spell)`
  border-radius: 50%;
`;

const ProfileImg = styled(OriginProfileImg)`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const WinRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TagContainer = styled.div`
  display: flex;
  :first-child {
    margin-right: 0.4rem;
  }
`;

const KDAComponent = styled(OriginKDAComponent)`
  margin-bottom: 0.6rem;
  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
  }
`;

const WinRateComponent = styled(OriginWinRateComponent)`
  margin-bottom: 0.6rem;
`;

const LevelContainer = styled.div`
  text-align: center;
`;

const ItemContainer = styled.div``;

const TeamContainer = styled.div``;

const ArrowContainer = styled.div<IGameResult>`
  max-width: 3rem;
  height: 100%;
  background-color: #e89c95;
  margin-left: 2rem;

  ${({ isWin }) =>
    isWin &&
    css`
      background-color: #7fb0e1;
    `};

  ${({ needRenew }) =>
    needRenew &&
    css`
      background-color: #a7a7a7;
    `};
`;
