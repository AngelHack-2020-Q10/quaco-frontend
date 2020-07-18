import React from "react";
import styled from "@emotion/styled";
import theme from "utils/theme";
import { css } from "emotion";

const DUMMY_DATA = [
  "tip",
  "ootd",
  "lunch",
  "newhobby",
  "cook",
  "summerdrink",
  "book",
  "strangerthings",
  "ozark",
];

export default () => {
  return (
    <Container>
      <h2
        className={css`
          color: ${theme.rawColors.red1};
          margin-bottom: 16px;
        `}
      >
        TrendingNow
      </h2>
      <Tags>
        {DUMMY_DATA.map(data => (
          <Tag>#{data}</Tag>
        ))}
      </Tags>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  cursor: pointer;
  font-weight: bold;
  margin: 0 16px 16px 0;
`;
