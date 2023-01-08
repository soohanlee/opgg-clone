import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.silver};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

export const ImgContainer = styled.div`
  width: 10.4rem;
  height: 10.4rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Rank = styled.div`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 0.4rem;
`;

export const GameCount = styled.div`
  margin-bottom: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  span {
    font-weight: bold;
  }
`;

export const Tier = styled.div`
  color: ${({ theme }) => theme.colors.dodgerBlue};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  margin-bottom: 0.6rem;
`;

export const LP = styled.div`
  margin-bottom: 0.3rem;
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    :nth-child(1) {
      color: #555e5e;
      font-weight: bold;
    }
    :nth-child(2) {
      color: ${({ theme }) => theme.colors.textGrey};
    }
  }
`;

export const WinRate = styled.div`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
