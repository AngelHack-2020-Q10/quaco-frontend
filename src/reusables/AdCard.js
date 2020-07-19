import React from "react";
import styled from "@emotion/styled";

export default ({ title, backgroundColor, image }) => {
  return (
    <Card backgroundColor={backgroundColor}>
      <img src={image} alt="" role="presentation" />
      <Badge>Ad</Badge>
      <p>{title}</p>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 10px;
  color: black;
  background: ${props => props.backgroundColor};
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    word-break: keep-all;
    width: 70%;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    right: 7%;
  }
`;

const Badge = styled.span`
  background: white;
  color: black;
  border-radius: 8px;
  position: absolute;
  right: 9px;
  top: 9px;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 10px;
`;
