import React from "react";
import styled from "styled-components";
import PageLayout from "../PageLayout";

import { FollowWrapper, FollowBottom, ContentRecommend, ContentTitle } from "../FollowerContainer/Follower";

const ProfileContent = () => {
  return (
    <PageLayout>
      <ProfileInfoWrapper>
        <ProfileImg></ProfileImg>
        <div>
          <ProfileName>이하연</ProfileName>
          <ProfileStatus>재밌는게 제일 좋아</ProfileStatus>
          <ProfileStatus>팔로잉 10 팔로워 5</ProfileStatus>
        </div>
      </ProfileInfoWrapper>
      <FollowWrapper>
        <ProfileConMid></ProfileConMid>
        <FollowBottom>
          <ContentTitle>뿅뿅 오락실 시즌2</ContentTitle>
          <ContentRecommend>추천 콘텐츠</ContentRecommend>
        </FollowBottom>
      </FollowWrapper>
    </PageLayout>
  );
};

const ProfileInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5rem;
`;

const ProfileImg = styled.img`
  width: 82px;
  height: 82px;
  background-color: #ffc000;
  border-radius: 12px;
  margin-right: 20px;
`;

const ProfileName = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2rem;
  color: #242424;
`;

const ProfileStatus = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #2e2e2e;
`;

const ProfileConMid = styled.div`
  width: 100%;
  height: 234px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e6e6e6;
  font-size: 14px;
`;
export default ProfileContent;
