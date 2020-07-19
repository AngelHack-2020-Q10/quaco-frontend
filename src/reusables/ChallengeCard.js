import React from "react";
import styled from "@emotion/styled";

export default ({ backgroundColor, question, image }) => {
  return (
    <Card backgroundColor={backgroundColor}>
      <img src={image} alt="" role="presentation" />
      <p>{question}</p>
    </Card>
  );
};

const Card = styled.div`
  width: 140px;
  height: 191px;
  border-radius: 10px;
  background: ${props => props.backgroundColor};
  margin-right: 16px;
  padding: 16px;
  position: relative;

  p {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    word-break: keep-all;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
