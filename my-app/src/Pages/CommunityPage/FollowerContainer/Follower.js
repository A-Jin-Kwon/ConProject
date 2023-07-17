import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

import { Button } from "../Menu";

const Follower = ({ src }) => {
  const [followed, setFollowed] = useState(false);
  return (
    <div>
      <FollowWrapper>
        <StyledLink to={"profile"}>
          <FollowTop>
            <FollowImg src={src}></FollowImg>
            <FollowNickname>닉네임</FollowNickname>
            <FollowBtnWrapper>
              <StyledButton
                onClick={(e) => {
                  //Link의 우선 동작을 막기 위해
                  e.preventDefault();
                  setFollowed((state) => !state);
                }}
                isFollowed={followed === false}
              >
                {followed === false ? "팔로우" : "팔로잉"}
              </StyledButton>
            </FollowBtnWrapper>
          </FollowTop>
          <FollowMid></FollowMid>
          <FollowBottom>
            <ContentTitle>뿅뿅 지구오락실 시즌2</ContentTitle>
            <ContentRecommend>추천 콘텐츠</ContentRecommend>
          </FollowBottom>
        </StyledLink>
      </FollowWrapper>
    </div>
  );
};

const Link = ({ children, currentPage, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const FollowWrapper = styled.div`
  width: 280px;
  height: 328px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-top: 2rem;
`;

const FollowTop = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
`;

const FollowImg = styled.img`
  width: 52px;
  height: 52px;
  margin: auto 10px auto 10px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #bbbbbb;
`;

const FollowNickname = styled.div`
  font-size: 14px;
  margin: auto auto auto 0;
  font-weight: 700;
`;

const FollowBtnWrapper = styled.div`
  width: 74px;
  height: 40px;
  padding: 0;
  margin: auto 10px auto auto;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;

  /* background-color: ${(props) =>
    props.primary
      ? "#ffc000"
      : props.secondary
      ? "#490171"
      : props.delete
      ? "#E61a1a"
      : props.disabled
      ? "#f8f8f8"
      : "#2e2e2e"}; */

  ${(props) =>
    props.isFollowed
      ? css`
          background-color: black;
          color: white;
        `
      : css`
          background-color: "#b1b1b1";
          color: black;
        `}
`;

const FollowMid = styled.div`
  width: 100%;
  height: 160px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e6e6e6;
  font-size: 14px;
`;

const FollowBottom = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentTitle = styled.div`
  margin: auto auto 5px 10px;
  font-size: 14px;
  font-weight: 700;
  color: #242424;
`;

const ContentRecommend = styled.div`
  margin: 5px auto auto 10px;
  font-size: 12px;
  font-weight: 400;
  color: #464646;
`;

export {
  StyledButton,
  FollowWrapper,
  FollowBottom,
  ContentTitle,
  ContentRecommend,
};
export default Follower;
