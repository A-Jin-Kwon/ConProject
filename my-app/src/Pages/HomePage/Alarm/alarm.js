import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";

//styled component의 문법으로 mui 커스텀하기
import { StyledEngineProvider } from "@mui/styled-engine"; // 본문을 감싸줘야함

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    yellow: {
      main: "#FFC000",
      dark: "#F1b600",
    },
    black: {
      main: "#000000",
    },
  },
});

const Alarm = () => {
  const dispatch = useDispatch();

  const handleAlarmClick = () => {
    dispatch({ type: "modalFlip" });
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AlarmContainer color="yellow" onClick={handleAlarmClick}>
          <NotificationsIcon color="black" />
          <Div>알림 추가</Div>
        </AlarmContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const AlarmContainer = styled(Button)`
  /* 알람 위치 조정 */
  position: absolute;
  right: 10px;
  z-index: 10;
  /* 스타일 편집 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  width: 110px;
  height: 40px;
  box-shadow: rgba(112, 112, 112, 0.3) 0px 2px 16px 0px;
  cursor: pointer;
`;

const Div = styled.div`
  margin-left: 4px;
  font-weight: 400;
  font-size: 14px;
  color: #464646;
`;

export default Alarm;
