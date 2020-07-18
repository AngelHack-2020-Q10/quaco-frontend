import React from "react";
import styled from "@emotion/styled";

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background: ${({ theme }) => theme.rawColors.green1};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 13px 22px;
  border-radius: 23px;
  border: none;
  font-weight: bold;
`;
