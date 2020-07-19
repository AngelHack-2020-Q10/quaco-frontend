import React from "react";
import NavigationBar from "reusables/NavigationBar";
import { ChevronLeftIcon, SearchIcon } from "reusables/Icons";
import styled from "@emotion/styled";
import { useHistory, useParams } from "react-router-dom";
import StoryCard from "reusables/StoryCard";

export default ({ top, title, buttonText, backgroundImage }) => {
  const history = useHistory();
  let { topic } = useParams();

  return (
    <Container>
      <NavigationBar
        left={
          <div style={{ display: "flex" }} onClick={() => history.goBack()}>
            <ChevronLeftIcon />
          </div>
        }
        title={`#${topic}`}
        right={<SearchIcon />}
      />
      <StyledStoryCard backgroundImage="https://user-images.githubusercontent.com/3839771/87868934-12928d00-c9d6-11ea-836f-177c41842e3d.jpg" />
      <StyledStoryCard text="My favorite drink is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
    </Container>
  );
};

const StyledStoryCard = styled(StoryCard)`
  height: ${props => (props.backgroundImage ? "400px" : "auto")};
  margin-bottom: 32px;
`;

const Container = styled.div``;
