import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <div>{top}</div>
      <h1>{title}</h1>
      <Button>{buttonText}</Button>
    </Container>
  );
};

const Container = styled.div`
  background-image: url("${props => props.backgroundImage}");
  height: 100vh;
  margin: -20px -20px 0;
  padding: 20px;
`;
