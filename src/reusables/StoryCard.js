import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";

export default ({ top, title, buttonText, backgroundImage }) => {
  return <Card backgroundImage={backgroundImage}></Card>;
};

const Card = styled.div`
  width: 213px;
  height: 291px;
  border-radius: 10px;
  background: url("${props =>
    props.backgroundImage}") no-repeat center center/cover;
  width: 183px;
  height: 251px;
  margin-right: 16px;
`;
