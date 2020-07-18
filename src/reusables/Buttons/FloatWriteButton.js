import React from "react";
import { PencilIcon } from "reusables/Icons";
import styled from "@emotion/styled";

const FloatWriteButton = () => (
  <FloatButton>
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
`;

export default FloatWriteButton;
