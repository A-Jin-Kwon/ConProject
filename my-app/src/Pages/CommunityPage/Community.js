import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import FollowerContainers from "./FollowerContainer/FollowerContainers";
import PageLayout from "./PageLayout";
import Modal from "./Modal/CommunityModal";
import Menu from "../SearchPage/Menu";

const Community = () => {
  const isModalClicked = useSelector((state) => state.communityReducer.isModalClicked);

  return (
    <>
      {!isModalClicked ? (
        <>
          <Menu menu1={{ eng: "recommend", kor: "추천" }} menu2={{ eng: "following", kor: "팔로잉" }}></Menu>
          <PageLayout>
            <FollowerContainers></FollowerContainers>
          </PageLayout>
        </>
      ) : (
        // <CommunityModal></CommunityModal>
        <Modal></Modal>
      )}
    </>
  );
};

export default Community;
