import React, { useState } from "react";
import styled from "styled-components";

import { StyledFollowButton } from "../../../Components/StyledComponents/StyledComponents";

const ProfileHeader = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* <span className="material-symbols-outlined">chevron_left</span> */}
        <BackBtn>chevron_left</BackBtn>
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

const BackBtn = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

const ProfileFollowBtnWrapper = styled.div`
  width: 100px;
  height: 40px;
`;

export { BackBtn, HeaderContainer, HeaderWrapper };
export default ProfileHeader;
