import React, { useState, useEffect } from "react";
import { ReactComponent as ChevronRightIcon } from "assets/icons/chevron-right.svg";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import store from "store";
import { saveQuarantineLogByGoogleAccountUuid } from "utils/firebase-db";

const getFormatedDateString = () => {
  const date = new Date();
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [
    date.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join("-");
};

export default ({ top, title, buttonText, backgroundImage }) => {
  const history = useHistory();
  const today = getFormatedDateString();
  const [dateValue, setDateValue] = useState();

  useEffect(() => {
    setDateValue(today);
  }, [today]);

  // methods
  const handleDateInput = async event => {
    const selectedDate = event.target.value;
    setDateValue(selectedDate);
    try {
      await saveQuarantineLogByGoogleAccountUuid(store.user.id, selectedDate);
      history.push("/");
    } catch (error) {
      alert("서버에 문제가 생겼습니다. 잠시 후 다시 시도해주세요");
    }
  };

  console.log({ dateValue, today });

  return (
    <Container>
      <Text>
        When is <span>the first day</span> of your quarantine?
      </Text>
      <DateInput
        type="date"
        id="quarantine-start"
        name="quarantine-start"
        value={dateValue}
        onChange={handleDateInput}
      />
      <NextButton>
        <ChevronRightIcon />
      </NextButton>
    </Container>
  );
};

const Container = styled.div``;
const DateInput = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.rawColors.green1};
  font-size: 28px;
  border: none;
`;
const Text = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 39px 0 24px;

  span {
    color: ${({ theme }) => theme.rawColors.green1};
  }
`;

const NextButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #00d06c;
  border-radius: 50%;
  position: fixed;
  right: 24px;
  bottom: 24px;

  svg path {
    fill: black;
  }
`;
