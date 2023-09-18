import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FollowerContainers from "./FollowerContainer/FollowerContainers";
import PageLayout from "./PageLayout";
import Modal from "./Modal/CommunityModal";
import Menu from "../SearchPage/Menu";

const Community = () => {
  const isModalClicked = useSelector((state) => state.communityReducer.isModalClicked);
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    !isLoggedIn ? navigate("/login") : navigate("/");
  }, [isLoggedIn]);

  return (
    <>
      {isModalClicked && <Modal></Modal>}
      <Menu menu1={{ eng: "recommend", kor: "추천" }} menu2={{ eng: "following", kor: "팔로잉" }}></Menu>
      <PageLayout>
        <FollowerContainers></FollowerContainers>
      </PageLayout>
    </>
  );
};

export default Community;
