import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import { ReactComponent as ChevronRightIcon } from "assets/icons/chevron-right.svg";

export default ({ title, color, children }) => {
  const history = useHistory();
  return (
    <Container>
      <TitleContainer
        color={color}
        onClick={() => history.push(`/posts/${title}`)}
      >
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
  margin-bottom: 16px;

  svg path {
    fill: ${props => props.color};
  }
`;
