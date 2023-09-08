import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alarm from "./Alarm/alarm";
import Container from "@mui/material/Container";

import HomeModal from "./Alarm/HomeModal";
import HomeCalendar from "./HomeCalendar";

const MyHome = () => {
  const isModalClicked = useSelector((state) => state.communityReducer.isModalClicked);
  const isLoggedIn = useSelector((state) => state.communityReducer.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {!isLoggedIn ? navigate("/login") : navigate("/")}
      {isModalClicked && <HomeModal></HomeModal>}
      {/* {true && <HomeModal></HomeModal>} */}
      <StyledMuiContainer fixed>
        <Alarm></Alarm>
        <HomeCalendar></HomeCalendar>
      </StyledMuiContainer>
    </>
  );
};

const StyledMuiContainer = styled(Container)`
  margin-top: 70px;
  position: relative;
`;

export default MyHome;
