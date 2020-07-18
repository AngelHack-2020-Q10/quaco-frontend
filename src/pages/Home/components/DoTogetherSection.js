import React from "react";
import Section from "reusables/Section";
import theme from "utils/theme";
import VerticalScroll from "reusables/VerticalScroll";
import Divider from "reusables/Divider";
import { css } from "emotion";

const DUMMY_DATA = [
  "[Stranger Things S01 E03] Let’s watch Stranger Things S01 E03",
  "[Stardew Valley] When I play this Stardew Valley",
  "[The Fast and the Furious 8] the first Fast and the Furious",
];

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Section title="DoTogether" color={theme.rawColors.orange1}>
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
          <Divider color={theme.rawColors.orange1} />
        </div>
      ))}
      <VerticalScroll></VerticalScroll>
    </Section>
  );
};
