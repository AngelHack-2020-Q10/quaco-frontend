import React, { useState } from "react";
import NavigationBar from "reusables/NavigationBar";
import styled from "@emotion/styled";
import { CloseIcon } from "reusables/Icons";
import { useHistory } from "react-router-dom";
import CategoryBottomSheet from "./components/CategoryBottomSheet";
import { ToastProvider, useToasts } from "react-toast-notifications";

export default () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [category, setCategory] = useState("Select a category");
  const history = useHistory();
  const { addToast } = useToasts();

  return (
    <Container>
      <NavigationBar
        left={
          <div style={{ display: "flex" }} onClick={() => history.goBack()}>
            <CloseIcon />
          </div>
        }
        title="New Story"
        right={
          <PostButton
            onClick={() => {
              addToast("Saved Successfully", { appearance: "success" });
              history.push("/");
            }}
          >
            Post
          </PostButton>
        }
      />
      <CategoryButton onClick={() => setShowBottomSheet(prev => !prev)}>
        {category}
      </CategoryButton>
      <Textarea
        onClick={() => setShowBottomSheet(false)}
        placeholder="Post anything, ask a question, share a tip. You can add tag with #"
      />
      <CategoryBottomSheet
        show={showBottomSheet}
        onClickCategory={value => {
          setCategory(value);
          setShowBottomSheet(false);
        }}
      />
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
