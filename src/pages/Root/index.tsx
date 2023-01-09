import React from "react";
import styled from "styled-components";

const Root = () => {
  return (
    <Container>
      <Title>소환사 검색 방법입니다.</Title>
      <Text>
        일단존버할게요 라는 소환사를 검색하면 summoners route로 이동합니다.
      </Text>
      <Text>
        일단존버할게요 외의 소환사는 mock data가 없어 NotFoundComponent로
        이동합니다.
      </Text>
      <Text>
        소환사 목록: 일단존버할게요, 프론트엔드 개발자 이수한, 사랑해요
        오피지지, 존버존버, 오피지지, 화이팅
      </Text>
      <Text>
        위 소환사 이름을 입력하시면 해당 소환사가 검색창에 나오며 해당 페이지로
        이동가능합니다.
      </Text>
    </Container>
  );
};

export default Root;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGray};
  text-align: center;
  padding: 10rem 0;
  color: #202d37;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 1rem;
`;
