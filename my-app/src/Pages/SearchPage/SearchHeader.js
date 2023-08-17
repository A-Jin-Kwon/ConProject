import React from "react";
import styled from "styled-components";
import PrevArrow from "../../Components/Header/PrevArrow";

import { HeaderContainer, HeaderWrapper } from "../CommunityPage/Profile/ProfileHeader";

const SearchHeader = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <PrevArrow />
        <div>검색</div>
        <div></div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default SearchHeader;
