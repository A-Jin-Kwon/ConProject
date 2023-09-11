import React, { useState } from "react";
import styled, { css } from "styled-components";
// import { styled } from "@mui/material/styles";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// mui 사용
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

import { StyledFollowButton } from "../../../Components/StyledComponents/StyledComponents";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Follower = ({ src }) => {
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);

  return (
    // <FollowWrapper>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper sx={{ m: 1 }}>
        <Card>
          <StyledLink to={"profile"}>
            <FollowTop>
              <ProfileImg src={src}></ProfileImg>
              <FollowNickname>닉네임</FollowNickname>
              <FollowBtnWrapper>
                <StyledFollowButton
                  onClick={(e) => {
                    //Link의 우선 동작을 막기 위해
                    e.preventDefault();
                    console.log("clicked");
                    setFollowed((state) => !state);
                  }}
                  isFollowed={followed === false}
                >
                  {followed === false ? "팔로우" : "팔로잉"}
                </StyledFollowButton>
              </FollowBtnWrapper>
            </FollowTop>
            <FollowMid
              onClick={(e) => {
                e.preventDefault();
                console.log("hah");
                dispatch({ type: "modalFlip" });
              }}
            ></FollowMid>
            <FollowBottom>
              <ContentTitle>뿅뿅 지구오락실 시즌2</ContentTitle>
              <ContentRecommend>추천 콘텐츠</ContentRecommend>
            </FollowBottom>
          </StyledLink>
        </Card>
      </Paper>
    </Grid>
    // </FollowWrapper>
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
  box-shadow: rgba(70, 70, 70, 0.18) 0px 2px 16px 0px;
`;

const FollowTop = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
`;

const ProfileImg = styled.img`
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

const FollowMid = styled.div`
  width: 100%;
  height: 160px;
  /* background-color: #f8f8f8; */
  background: linear-gradient(to right, #ffeece, #ffecc0);
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

export { FollowWrapper, FollowBottom, ContentTitle, ContentRecommend, StyledLink, ProfileImg, FollowBtnWrapper };
export default Follower;
