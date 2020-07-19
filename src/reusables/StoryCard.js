import React from "react";
import styled from "@emotion/styled";

export default ({ className, backgroundImage }) => {
  return (
    <Card backgroundImage={backgroundImage} className={className}>
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
    </Card>
  );
};

const Card = styled.div`
  border-radius: 10px;
  padding: 16px;
  background: url("${props =>
    props.backgroundImage}") no-repeat center center/cover;
  
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
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
const Timestamp = styled.div``;
