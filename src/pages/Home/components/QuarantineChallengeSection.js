import React from "react";
import Section from "reusables/Section";
import VerticalScroll from "reusables/VerticalScroll";
import ChallengeCard from "reusables/ChallengeCard";

const DUMMY_DATA = [
  {
    question: "What’s your favorite drink?",
    image:
      "https://user-images.githubusercontent.com/3839771/87845212-69c62e00-c900-11ea-83f1-7cbf90aec328.png",
    backgroundColor: "#5100d9",
  },
  {
    question: "What sports do you like?",
    image:
      "https://user-images.githubusercontent.com/3839771/87845213-6b8ff180-c900-11ea-8dd5-2d3e210dafe1.png",
    backgroundColor: "#9b6bff",
  },
  {
    question: "Tell me about your best friend",
    image:
      "https://user-images.githubusercontent.com/3839771/87845212-69c62e00-c900-11ea-83f1-7cbf90aec328.png",
    backgroundColor: "#de7279",
  },
];

export default () => {
  return (
    <Section title="QuarantineChallenge" color="white">
      <VerticalScroll>
        {DUMMY_DATA.map(data => (
          <ChallengeCard
            key={data.question}
            backgroundColor={data.backgroundColor}
            question={data.question}
            image={data.image}
          />
        ))}
      </VerticalScroll>
    </Section>
  );
};
