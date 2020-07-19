import React from "react";
import { GoogleIcon } from "reusables/Icons";
import styled from "@emotion/styled";
import { loginAccountWithGoogle } from "utils/firebase-util";
import { useHistory } from "react-router-dom";
import store from "store";
import {
  fetchQuarantineLogByGoogleAccountUuid,
  checkIfQuarantineLogInsertedByGoogleAccountUuid,
} from "utils/firebase-db";

export default ({ top, title, buttonText, backgroundImage }) => {
  const history = useHistory();

  const loginWithGoogleAccount = async () => {
    try {
      // save user information to store(state management)
      const {
        additionalUserInfo: { profile },
      } = await loginAccountWithGoogle();
      store.setUser(profile);
      // check if the login user has already inserted the quarantine start date
      const hasQuarantineLog = await checkIfQuarantineLogInsertedByGoogleAccountUuid(
        profile.id,
      );
      console.log(hasQuarantineLog);
      if (!hasQuarantineLog) {
        history.push("type-quarantine");
        return;
      }
      const { startDate } = await fetchQuarantineLogByGoogleAccountUuid(
        profile.id,
      );
      store.setQuarantineStartDate(startDate);
      history.push("/");
    } catch (error) {
      alert("서버에 문제가 생겼습니다. 잠시 후 다시 시도해주세요");
      console.log(error);
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
