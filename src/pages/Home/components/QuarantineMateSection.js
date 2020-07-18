import React from "react";
import styled from "@emotion/styled";
import Section from "reusables/Section";
import theme from "utils/theme";
import StoryCard from "reusables/StoryCard";
import VerticalScroll from "reusables/VerticalScroll";
import ChallengeCard from "reusables/ChallengeCard";
import Divider from "reusables/Divider";
import { css } from "emotion";
import MateAvatar from "reusables/MateAvatar";

const DUMMY_DATA = [
  {
    dday: 3,
    image:
      "https://user-images.githubusercontent.com/3839771/87845611-dabb1500-c903-11ea-8715-aa565eef7557.png",
  },
  {
    dday: 2,
    image:
      "https://user-images.githubusercontent.com/3839771/87845612-db53ab80-c903-11ea-8e76-18a583b03415.png",
  },
  {
    dday: 4,
    image:
      "https://user-images.githubusercontent.com/3839771/87845610-d989e800-c903-11ea-9d31-b7387d523f64.png",
  },
  {
    dday: 5,
    image:
      "https://user-images.githubusercontent.com/3839771/87845611-dabb1500-c903-11ea-8715-aa565eef7557.png",
  },
];

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Section title="QurantineMate" color={theme.rawColors.purple1}>
      <VerticalScroll>
        {DUMMY_DATA.map(data => (
          <MateAvatar image={data.image} dday={data.dday} />
        ))}
      </VerticalScroll>
    </Section>
  );
};

const Container = styled.div``;
