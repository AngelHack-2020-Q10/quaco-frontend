import React, { useState, useEffect } from "react";
import { ReactComponent as ChevronRightIcon } from "assets/icons/chevron-right.svg";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

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
        onChange={e => setDateValue(e.target.value)}
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
