import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "utils/theme";
import BottomSheet from "reusables/BottomSheet";
import Divider from "reusables/Divider";
import { UpOrDownIcon } from "reusables/Icons";

const DUMMY_DATA = [
  {
    category: "QuarantineChallenge",
    subCategories: [
      "What sports do you like to play?",
      "Tell me about your best friend",
      "What’s your favorite meme?",
    ],
  },
  { category: "Helpme" },
  { category: "QuarantineMate" },
  { category: "DoTogether" },
];

export default ({ show, onClickCategory }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <BottomSheet show={show} buttonText="Save">
      <Title>Category</Title>
      <div>
        {DUMMY_DATA.map(({ category, subCategories }) => {
          const hasSub = subCategories !== undefined;
          return (
            <div key={category}>
              {hasSub ? (
                <TogglableCategory onClick={() => setIsOpened(prev => !prev)}>
                  #{category}
                  <UpOrDownIcon isUp={isOpened} />
                </TogglableCategory>
              ) : (
                <Category onClick={() => onClickCategory(category)}>
                  #{category}
                </Category>
              )}

              {hasSub && isOpened && (
                <>
                  <Divider color={theme.rawColors.green1} />
                  {subCategories.map(sub => (
                    <Sub key={sub} onClick={() => onClickCategory(sub)}>
                      {sub}
                    </Sub>
                  ))}
                </>
              )}
              <Divider color={theme.rawColors.green1} />
            </div>
          );
        })}
      </div>
    </BottomSheet>
  );
};

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 20px;
`;

const Category = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const TogglableCategory = styled(Category)`
  display: flex;
  justify-content: space-between;
`;
const Sub = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding-bottom: 15px;
`;
