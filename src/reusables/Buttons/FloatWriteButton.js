import React from "react";
import { PencilIcon } from "reusables/Icons";
import styled from "@emotion/styled";

const FloatWriteButton = ({ show }) => (
  <FloatButton show={show}>
    <PencilIcon />
  </FloatButton>
);

const FloatButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.rawColors.green1};
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 0;
  border: none;
  transform: ${props => (props.show ? "none" : "translateY(80px)")};
  transition: transform 0.3s ease;
`;

export default FloatWriteButton;
