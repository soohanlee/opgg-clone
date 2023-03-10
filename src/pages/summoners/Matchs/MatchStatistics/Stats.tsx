import { Summary } from "@app/apis/types";
import { totalGame, winRate } from "@app/utils/functions";
import styled from "styled-components";
import { PieChart, Pie, Label } from "recharts";
import { theme } from "@app/styles/Theme";
import OriginKDAComponent from "../../components/KDAComponent";
import OriginOnlyWinRatingNumber from "../../components/OnlyWinRatingNumber";
import OriginWinRateComponent from "../../components/WinRateComponent";

interface Props {
  summary: Summary;
}

const Stats = ({ summary }: Props) => {
  const { assists, deaths, kills, losses, wins } = summary;

  const data = [
    { name: wins, fill: theme.colors.skyblue },
    { name: losses, fill: theme.colors.brightRed },
  ];

  return (
    <Container>
      <InnerContainer>
        <PieChartContainer>
          <GameResult>
            {`${totalGame(wins, losses)}전  ${wins}승 ${losses}패`}
          </GameResult>
          <PieChart width={90} height={90}>
            <Pie
              stroke="none"
              isAnimationActive={false}
              data={data}
              innerRadius={30}
              outerRadius={43}
              paddingAngle={0}
              dataKey="name"
            >
              <Label
                fontSize={14}
                fontWeight={700}
                color={theme.colors.darkGray}
                value={`${winRate(wins, losses)}%`}
                position="center"
              />
            </Pie>
          </PieChart>
        </PieChartContainer>

        <Wrapper>
          <KDAComponent
            kills={kills}
            deaths={deaths}
            assists={assists}
            isRedPoint
          />

          <TextConatiner>
            <WinRateComponent
              kills={kills}
              deaths={deaths}
              assists={assists}
              isOne
            />
            <OnlyWinRatingNumber wins={wins} losses={losses} withBracket />
          </TextConatiner>
        </Wrapper>
      </InnerContainer>
    </Container>
  );
};

export default Stats;

const Container = styled.div`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.silver};
  padding: 2.4rem;
`;

const GameResult = styled.div`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.4rem;
  top: -3rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: max-content;
`;

const KDAComponent = styled(OriginKDAComponent)`
  span {
    font-weight: bold;
  }
`;

const PieChartContainer = styled.div`
  position: relative;
  pointer-events: none;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
`;

const Wrapper = styled.div`
  margin-left: 3.4rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TextConatiner = styled.div`
  display: flex;
  margin-top: 0.6rem;
  align-items: center;
`;

const WinRateComponent = styled(OriginWinRateComponent)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-right: 0.4rem;
`;

const OnlyWinRatingNumber = styled(OriginOnlyWinRatingNumber)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
