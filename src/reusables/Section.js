import React from "react";
import styled from "@emotion/styled";

import { ReactComponent as ChevronRightIcon } from "assets/icons/chevron-right.svg";

export default ({ title, color, children }) => {
  return (
    <Container>
      <TitleContainer color={color}>
        <h2>#{title}</h2>
        <ChevronRightIcon />
      </TitleContainer>
      {children}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg path {
    fill: ${props => props.color};
  }
`;
