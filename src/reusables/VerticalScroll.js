import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";

export default ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 -24px;
  padding: 0 24px;

  > div {
    flex-shrink: 0;
  }
`;
