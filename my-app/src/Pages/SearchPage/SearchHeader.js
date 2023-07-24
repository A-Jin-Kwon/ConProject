import React from "react";
import styled from "styled-components";

import { BackBtn, HeaderContainer, HeaderWrapper } from "../CommunityPage/Profile/ProfileHeader";

const SearchHeader = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <BackBtn>chevron_left</BackBtn>
        <div>검색</div>
        <div></div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default SearchHeader;
