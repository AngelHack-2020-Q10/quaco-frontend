import React from "react";
import { GoogleIcon } from "reusables/Icons";
import styled from "@emotion/styled";
import { loginAccountWithGoogle } from "utils/firebase-util";
import { useHistory } from "react-router-dom";

export default ({ top, title, buttonText, backgroundImage }) => {
  const history = useHistory();

  const loginWithGoogleAccount = async () => {
    try {
      const response = await loginAccountWithGoogle();
      console.log(response);
      history.push("/");
    } catch (error) {
      alert("Sorry, there's an error");
      console.log({ error });
    }
  };

  return (
    <Container>
      <Text1>
        Welcome to <span>Quaco</span> 👋
      </Text1>
      <Text2>
        Share your stories <br />
        with our <br />
        Quarantine Communities
        <br />
      </Text2>
      <GoogleButton onClick={loginWithGoogleAccount}>
        <StyledGoogleIcon />
        Continue with Google
      </GoogleButton>
    </Container>
  );
};

const Container = styled.div``;
const Text1 = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 20vh 0 4vh;

  span {
    color: ${({ theme }) => theme.rawColors.green1};
  }
`;
const Text2 = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 7vh;
`;
const StyledGoogleIcon = styled(GoogleIcon)`
  margin-right: 10px;
`;
const GoogleButton = styled.button`
  width: 327px;
  height: 48px;
  border-radius: 24px;
  background-color: #bb0000;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
