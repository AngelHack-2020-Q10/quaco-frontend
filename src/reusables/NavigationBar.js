import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";
import { ChevronLeftIcon } from "./Icons";

export default ({ left, title, right }) => {
  return (
    <Container>
      {left}
      <Title>{title}</Title>
      {right}
    </Container>
  );
};

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Container = styled.div`
  margin-bottom: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
