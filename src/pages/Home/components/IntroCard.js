import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";
import { css } from "emotion";

export default React.forwardRef(
  (
    {
      top,
      title,
      buttonText,
      backgroundImage,
      profileImage,
      loginUserName,
      remainingDate,
    },
    ref,
  ) => {
    return (
      <Container backgroundImage={backgroundImage} ref={ref}>
        <Greeting>
          <div
            className={css`
              line-height: 1.5em;
            `}
          >
            Hi, {loginUserName}
            <br />
            It’s almost over!{" "}
          </div>
          <Profile>
            <Avatar imageSrc={profileImage} />
            {remainingDate != null && <span>D{remainingDate}</span>}
          </Profile>
        </Greeting>
        <div>
          <div>{top}</div>
          <h1>{title}</h1>
          <Button>{buttonText}</Button>
        </div>
      </Container>
    );
  },
);

const Container = styled.div`
  background: url("${props =>
    props.backgroundImage}") no-repeat center center/cover;
  height: 100vh;
  margin: -20px -20px 0;
  padding: 24px 24px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin: 8px 0 24px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Greeting = styled.div`
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff38;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const Profile = styled.div`
  position: relative;
  span {
    font-size: 14px;
    background: #c018ea;
    padding: 3px 9px;
    border-radius: 11px;
    bottom: 14px;
    font-weight: bold;
    position: relative;
  }
`;
const Avatar = styled.div`
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.rawColors.purple1};
    background: url("${props => props.imageSrc}") no-repeat center center/cover;
    width: 48px;
    height: 48px;
`;
