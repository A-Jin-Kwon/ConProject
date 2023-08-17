import React, { useState } from "react";
import styled from "styled-components";
import PrevArrow from "../../../Components/Header/PrevArrow";

import { StyledFollowButton } from "../../../Components/StyledComponents/StyledComponents";

const ProfileHeader = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <PrevArrow />
        <div>프로필</div>
        <ProfileFollowBtnWrapper>
          <StyledFollowButton onClick={() => setFollowed((state) => !state)} isFollowed={followed === false}>
            {followed === false ? "팔로우" : "팔로잉"}
          </StyledFollowButton>
        </ProfileFollowBtnWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  margin: 0;
  height: 70px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20rem 0 20rem;
  box-sizing: border-box;
  align-items: center;
  height: 100%;

  > div {
    font-weight: 700;
  }
`;

const ProfileFollowBtnWrapper = styled.div`
  width: 100px;
  height: 40px;
`;

export { HeaderContainer, HeaderWrapper };
export default ProfileHeader;
