import React from "react";
import styled from "styled-components";

const NotFoundComponent = () => {
  return (
    <Container>
      <Title>
        OP.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.
      </Title>
    </Container>
  );
};

export default NotFoundComponent;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGray};
  text-align: center;
  padding: 10rem 0;
  color: #202d37;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
`;
