import React from "react";
import styled from "@emotion/styled";
import Section from "reusables/Section";
import theme from "utils/theme";
import StoryCard from "reusables/StoryCard";
import VerticalScroll from "reusables/VerticalScroll";
import Divider from "reusables/Divider";
import { css } from "emotion";

const DUMMY_DATA = [
  "How can I get home from the airport to airbnb?",
  "What should I do when I don’t have towel?",
  "Could anybody help me how to buy maratang?",
];

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Section title="HelpMe" color={theme.rawColors.blue1}>
      {DUMMY_DATA.map(data => (
        <div>
          <p
            className={css`
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            `}
          >
            {data}
          </p>
          <Divider color={theme.rawColors.blue1} />
        </div>
      ))}
      <VerticalScroll></VerticalScroll>
    </Section>
  );
};

const Container = styled.div``;
