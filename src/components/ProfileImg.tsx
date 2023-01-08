import React from "react";
import styled from "styled-components";

interface Props {
  width: number;
  img: string;
  className?: string;
}

const ProfileImg = ({ width, img, className }: Props) => {
  return (
    <Container width={width} className={className}>
      <Img src={img} alt="profile" />
    </Container>
  );
};

export default ProfileImg;

const Container = styled.div<{ width: number }>`
  min-width: ${({ width }) => width}px;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.white};
`;
