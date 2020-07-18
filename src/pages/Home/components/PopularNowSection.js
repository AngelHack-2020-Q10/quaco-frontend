import React from "react";
import styled from "@emotion/styled";
import Section from "reusables/Section";
import theme from "utils/theme";

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Section title="PopularNow" color={theme.rawColors.green2}>
      카드 카드
    </Section>
  );
};

const Container = styled.div``;
