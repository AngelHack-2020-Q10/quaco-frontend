import React, { useState } from "react";
import NavigationBar from "reusables/NavigationBar";
import styled from "@emotion/styled";
import { CloseIcon } from "reusables/Icons";
import CategoryBottomSheet from "./components/CategoryBottomSheet";

export default ({ top, title, buttonText, backgroundImage }) => {
  const [showBottomSheet, setShowBottomSheet] = useState(true);
  return (
    <Container>
      <NavigationBar
        left={<CloseIcon />}
        title="New Story"
        right={<PostButton>Post</PostButton>}
      />
      <CategoryButton onClick={() => setShowBottomSheet(prev => !prev)}>
        Select a category
      </CategoryButton>
      <Textarea
        onClick={() => setShowBottomSheet(false)}
        placeholder="Post anything, ask a question, share a tip. You can add tag with #"
      />
      <CategoryBottomSheet show={showBottomSheet} />
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
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: white;
  min-height: 50vh;

  &:focus {
    outline: none;
  }
`;
