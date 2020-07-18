import React from "react";
import NavigationBar from "reusables/NavigationBar";
import styled from "@emotion/styled";
import { ChevronLeftIcon } from "reusables/Icons";

export default ({ top, title, buttonText, backgroundImage }) => {
  return (
    <Container>
      <NavigationBar
        left={<ChevronLeftIcon />}
        title="New Story"
        right={<PostButton>Post</PostButton>}
      />
      <CategoryButton>Select a category</CategoryButton>
      <Textarea placeholder="Post anything, ask a question, share a tip. You can add tag with #" />
    </Container>
  );
};

const Container = styled.div``;
const PostButton = styled.button`
  color: ${({ theme }) => theme.rawColors.green1};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background: transparent;
`;

const CategoryButton = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.rawColors.green1};
  margin: 24px 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80vh;
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: white;

  &:focus {
    outline: none;
  }
`;
