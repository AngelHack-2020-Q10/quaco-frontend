import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";
import SignupForm from "./components/SignupForm";

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Container>
      <SignupForm></SignupForm>
    </Container>
  );
};

const Container = styled.div``;
