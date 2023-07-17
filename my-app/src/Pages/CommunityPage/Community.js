import React from "react";
import styled from "styled-components";

import FollowerContainers from "./FollowerContainer/FollowerContainers";
import Menu from "./Menu";
import PageLayout from "./PageLayout";
import Search from "../../Components/StyledComponents/Search";

const Community = () => {
  return (
    <PageLayout>
      <Search placeholder="유저를 검색해보세요!"></Search>
      <Menu></Menu>
      <FollowerContainers></FollowerContainers>
    </PageLayout>
  );
};

export default Community;
