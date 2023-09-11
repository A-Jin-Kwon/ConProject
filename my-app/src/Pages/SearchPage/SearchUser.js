import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { StyledFollowButton } from "../../Components/StyledComponents/StyledComponents";
import { FollowBtnWrapper } from "../CommunityPage/FollowerContainer/Follower";

const SearchUser = ({ it }) => {
  console.log(it);
  const [followed, setFollowed] = useState(false);
  return (
    <Grid item sx={{ borderBottom: "1px solid #e6e6e6", p: 2 }} xs={6}>
      <FlexBox>
        <ProfileImg />
        <Div>
          <MemberName>{it.name}</MemberName>
          <RecommendContentsNum>추천 컨텐츠</RecommendContentsNum>
        </Div>
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
      </FlexBox>
    </Grid>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

const Div = styled.div``;

const ProfileImg = styled.img`
  width: 52px;
  height: 52px;
  margin-right: 1rem;
  background-color: black;
  border-radius: 1px solid red;
  border-radius: 8px;
`;

const MemberName = styled.div`
  font-size: 16px;
  line-height: 25.6px;
`;

const RecommendContentsNum = styled.div`
  font-size: 14px;
  color: #464646;
  margin-top: 6px;
`;

export default SearchUser;
