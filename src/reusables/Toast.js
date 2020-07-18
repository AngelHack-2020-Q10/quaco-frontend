import React from "react";
import styled from "@emotion/styled";
import { DefaultToast } from "react-toast-notifications";

export default ({ children, ...props }) => {
  return (
    <StyledDefaultToast {...props}>
      <Wrapper>{children}</Wrapper>
    </StyledDefaultToast>
  );
};

const StyledDefaultToast = styled(DefaultToast)`
  background: #00d06c !important;

  .react-toast-notifications__toast__icon-wrapper {
    display: none !important;
  }

  .react-toast-notifications__toast__dismiss-button {
    display: flex;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
`;
