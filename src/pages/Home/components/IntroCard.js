import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";
import { css } from "emotion";

export default React.forwardRef(
  ({ top, title, buttonText, backgroundImage }, ref) => {
    return (
      <Container backgroundImage={backgroundImage}>
        <Greeting>
          <div
            className={css`
              line-height: 1.5em;
            `}
          >
            Hi, Hyein
            <br />
            It’s almost over!{" "}
          </div>
          <Profile>
            <Avatar imageSrc="https://woodgreen.org.uk/image/image/image/V8Iw3SL87ubcIekoP1DmmhekPFXPNbBL5yB4JpVR.jpeg?w=800&h=422&fit=crop-center" />
            <span>D-3</span>
          </Profile>
        </Greeting>
        <div ref={ref}>
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
  height: calc(100vh - 78px);
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
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const Profile = styled.div`
  position: relative;
  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
    background: ${({ theme }) => theme.rawColors.purple1};
    padding: 3px 10px;
    border-radius: 11px;
    position: absolute;
    bottom: -3px;
    left: 2px;
    font-weight: bold;
    min-width: 30px;
  }
`;
const Avatar = styled.div`
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.rawColors.purple1};
    background: url("${props => props.imageSrc}") no-repeat center center/cover;
    width: 48px;
    height: 48px;
`;
