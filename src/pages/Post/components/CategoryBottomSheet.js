import React from "react";
import { Button } from "reusables/Buttons";
import styled from "@emotion/styled";
import theme from "utils/theme";
import BottomSheet from "reusables/BottomSheet";
import Divider from "reusables/Divider";

const DUMMY_DATA = [
  "QuarantineChallenge",
  "Helpme",
  "QuarantineMate",
  "DoTogether",
];

export default ({ show }) => {
  return (
    <BottomSheet show={show} buttonText="Save">
      <Title>Category</Title>
      <div>
        {DUMMY_DATA.map(data => (
          <div>
            <Category>#{data}</Category>
            <Divider color={theme.rawColors.green1} />
          </div>
        ))}
      </div>
    </BottomSheet>
  );
};

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 20px;
`;

const Category = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
