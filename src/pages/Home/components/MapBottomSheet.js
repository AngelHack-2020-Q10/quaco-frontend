import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "utils/theme";
import BottomSheet from "reusables/BottomSheet";
import Divider from "reusables/Divider";
import { SearchIcon, LocationIcon } from "reusables/Icons";
import Map from "./Map";

export default ({ show, latlng, onClickSave }) => {
  console.log({ latlng });
  const [isOpened, setIsOpened] = useState(false);
  return (
    <BottomSheet show={show} height="99vh">
      <TitleWrapper>
        <Title>Location</Title>
        <SaveButton onClick={onClickSave}>Save</SaveButton>
      </TitleWrapper>
      <Searcher>
        <SearchIcon />
        <input placeholder="Seoul" />
        <LocationIcon />
      </Searcher>
      <Map {...latlng} />
    </BottomSheet>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const Searcher = styled.div`
  display: flex;
  padding: 10px 12px;
  background: black;
  margin-bottom: 16px;
  border-radius: 8px;
  justify-content: space-between;

  input {
    flex: 1;
    background: transparent;
    border: none;
    font-size: 18px;
    margin-left: 9px;
}
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const SaveButton = styled.button`
  color: ${({ theme }) => theme.rawColors.green1};
  font-size: 16px;
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
