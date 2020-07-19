import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "utils/theme";
import BottomSheet from "reusables/BottomSheet";
import Divider from "reusables/Divider";
import { UpOrDownIcon } from "reusables/Icons";

export default ({ show, onClickCategory }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <BottomSheet show={show} height="90vh">
      <Title>Location</Title>
      <div>hi</div>
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

const TogglableCategory = styled(Category)`
  display: flex;
  justify-content: space-between;
`;
const Sub = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding-bottom: 15px;
`;
