import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

export default ({ className, backgroundImage, text }) => {
  const history = useHistory();

  return (
    <Card
      backgroundImage={backgroundImage}
      className={className}
      onClick={() => history.push("/post-detail")}
    >
      <Upper>
        <div style={{ display: "flex" }}>
          <Avatar src="https://user-images.githubusercontent.com/3839771/87869007-dca1d880-c9d6-11ea-9dd8-d7c46a96e09c.png" />
          <UserInfo>
            <div>Username</div>
            <DDayBadge>D-10</DDayBadge>
          </UserInfo>
        </div>
        <Timestamp>3m</Timestamp>
      </Upper>
      {text}
      <Bottom>
        <Likes>👍 12</Likes>
        <Comments>💬 10</Comments>
      </Bottom>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 10px;
  padding: 16px;
  background: #0d1712 url("${props =>
    props.backgroundImage}") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;
const UserInfo = styled.div``;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  margin-right: 12px;
  border-radius: 50%;
`;
const DDayBadge = styled.span`
  border: 1px solid white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 9px;
`;
const Timestamp = styled.div`
  font-size: 12px;
`;

const Bottom = styled.div`
  margin-top: 16px;
`;
const IconContainer = styled.span`
  background-color: #0000008c;
  border-radius: 16px;
  padding: 5px 10px;
  margin-right: 5px;
  font-size: 14px;
`;
const Likes = styled(IconContainer)``;
const Comments = styled(IconContainer)``;
