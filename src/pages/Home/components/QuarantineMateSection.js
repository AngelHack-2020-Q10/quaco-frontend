import React from "react";
import Section from "reusables/Section";
import theme from "utils/theme";
import VerticalScroll from "reusables/VerticalScroll";
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

export default () => {
  return (
    <Section title="QurantineMate" color={theme.rawColors.purple1}>
      <VerticalScroll>
        {DUMMY_DATA.map(data => (
          <MateAvatar key={data.image} image={data.image} dday={data.dday} />
        ))}
      </VerticalScroll>
    </Section>
  );
};
