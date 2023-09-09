import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

import { StyledMuiContainer } from "../../Pages/HomePage/MyHome";

const Loading = () => {
  return (
    <StyledMuiContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // 수평 중앙 정렬
        justifyContent: "center", // 수직 중앙 정렬
      }}
    >
      <CircularProgress sx={{ color: "#ffc000" }} />
    </StyledMuiContainer>
  );
};

const LoadingContainer = styled(StyledMuiContainer)`
  display: flex;
  justify-content: center;
`;

export default Loading;
