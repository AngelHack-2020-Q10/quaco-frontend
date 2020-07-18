import React from "react";
import styled from "@emotion/styled";
import Section from "reusables/Section";
import theme from "utils/theme";
import StoryCard from "reusables/StoryCard";
import VerticalScroll from "reusables/VerticalScroll";

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Section title="PopularNow" color={theme.rawColors.green2}>
      <VerticalScroll>
        <StoryCard backgroundImage="https://user-images.githubusercontent.com/3839771/87844541-f10fa380-c8f8-11ea-9323-9002971c0fef.png" />
        <StoryCard backgroundImage="https://user-images.githubusercontent.com/3839771/87844552-fd93fc00-c8f8-11ea-82e1-f5d7f70a8180.png" />
        <StoryCard backgroundImage="https://user-images.githubusercontent.com/3839771/87844541-f10fa380-c8f8-11ea-9323-9002971c0fef.png" />
      </VerticalScroll>
    </Section>
  );
};

const Container = styled.div``;
