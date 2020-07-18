import React from "react";
import styled from "@emotion/styled";

export default ({ image, dday }) => {
  return (
    <Wrapper>
      <Avatar imageSrc={image} alt="Profile of ㅁㅁ" />
      <span>D-{dday}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 16px 13px 0;
  position: relative;

  span {
    background: ${({ theme }) => theme.rawColors.purple1};
    padding: 3px 10px;
    border-radius: 11px;
    font-size: 14px;
    position: absolute;
    bottom: -5px;
    right: 10px;
  }
`;

const Avatar = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.rawColors.purple1};
  background: url("${props => props.imageSrc}") no-repeat center center/cover;
`;
