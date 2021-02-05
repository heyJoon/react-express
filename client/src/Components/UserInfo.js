import React from "react";
import styled from "styled-components";

const UserInfoBlock = styled.article`
  position: absolute;
  width: 300px;
  height: 200px;
  top: 20%;
  right: 0;
`;

const UserProfileImg = styled.div`
  background: url("http://placehold.it/64/64") no-repeat;
  background-size: 100% 100%;
  margin: 10px auto;
  width: 100px;
  height: 100px;
`;

const Title = styled.h1``;

const UserInfo = () => {
  return (
    <UserInfoBlock>
      <UserProfileImg></UserProfileImg>
      {/* <Title>이준호</Title>
      <Title>950624</Title>
      <Title>목표금액</Title>
      <Title>목표예산</Title> */}
    </UserInfoBlock>
  );
};

export default UserInfo;
