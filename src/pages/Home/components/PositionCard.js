import React from "react";
import { MapIcon } from "reusables/Icons";
import Divider from "reusables/Divider";
import styled from "@emotion/styled";
import { css } from "emotion";

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Container>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        `}
      >
        <h2>
          You see stories in <br />
          Seoul (+1km)
        </h2>
        <MapIcon />
      </div>
      <Divider color="white" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;
