import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import TextField from "@mui/material/TextField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine"; // 본문을 감싸줘야함
import AlarmSearch from "./AlarmSearch";

import { baseServerURL } from "../../../Components/StyledComponents/StyledComponents";
import { ContactSupportOutlined } from "@mui/icons-material";

// mui를 사용해서 만들어본 모달
const theme = createTheme({
  palette: {
    yellow: {
      main: "#FFC000",
      dark: "#F1b600",
    },
    black: {
      main: "#000000",
    },
    DarkYellow: {
      main: "#F1b600",
    },
  },
  // 아래 방법으로는 안 되나? chatgpt가 알려준건데...
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#ffc000",
      },
    },
  },
});

const HomeModal = () => {
  const dispatch = useDispatch();
  const isModalClicked = useSelector((state) => state.communityReducer.isModalClicked);
  const selectedConTitle = useSelector((state) => state.communityReducer.selectedConTitle);
  const selectedConId = useSelector((state) => state.communityReducer.selectedConId);
  // 검색 입력 값
  const [inputValue, setInputValue] = useState("");
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(dayjs(today));
  const [time, setTime] = useState(dayjs(today));
  const [anchorEl, setAnchorEl] = useState(null);
  const [emailAddress, setEmailAddress] = useState("");

  // 알림 누르면 나오는 모달 관리
  useEffect(() => {
    setOpen(isModalClicked);
  }, [isModalClicked]);

  useEffect(() => {
    dispatch({ type: "Multiple_Modal&HomeSearch", input: inputValue });
  }, [inputValue]);

  useEffect(() => {
    if (selectedConTitle !== "") setInputValue(selectedConTitle);
  }, [selectedConTitle]);

  const ClosePopper = () => {
    setOpen(false);
    dispatch({ type: "modalFlip" });
  };

  // 콘텐츠 검색 기능
  const handleModalSearch = (e) => {
    setAnchorEl(e.target);
    setInputValue(e.target.value);
  };

  const datePickerStyle = {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "yellow.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow.main",
      },
      "& .MuiInputLabel-root": {
        color: "#F1b600", //label 색상변경
      },
    },
    "& .MuiInputLabel-root": {
      color: "#F1b600", //label 색상변경
    },
  };

  const handleSubmit = async () => {
    const auth = localStorage.getItem("auth");

    const formatDate = (inputDate) => {
      // 입력 날짜 문자열을 Date 객체로 변환
      const date = new Date(inputDate);

      // 날짜 및 시간 구성 요소 추출
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리로 포맷팅
      const day = String(date.getDate()).padStart(2, "0"); // 날짜를 2자리로 포맷팅
      const hours = String(date.getHours()).padStart(2, "0"); // 시간을 2자리로 포맷팅
      const minutes = String(date.getMinutes()).padStart(2, "0"); // 분을 2자리로 포맷팅
      const seconds = String(date.getSeconds()).padStart(2, "0"); // 초를 2자리로 포맷팅

      // 포맷된 문자열 반환
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    };

    console.log(formatDate(time));
    const atime = formatDate(time);

    const data = {
      id: inputValue,
      time: atime,
      email: emailAddress,
    };
    const setAlarm = async () => {
      const res = await axios.post(baseServerURL + "/notifications", data, {
        headers: { Authorization: auth },
      });
      console.log(res);
    };
    try {
      const res = await setAlarm();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    ClosePopper();
  };
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <Dialog open={open}>
          <DialogTitle sx={{ p: 3 }}>
            <ModalCloseIcon onClick={ClosePopper}></ModalCloseIcon>
          </DialogTitle>
          {/* 콘텐츠 제목 검색 */}
          <ModalDialogContent dividers>
            <FormatListNumberedRtlIcon sx={{ mr: 2 }} />
            <ModalTextField id="outlined-search" label="콘텐츠 검색" type="search" color="yellow" onInput={handleModalSearch} value={inputValue} />
            {inputValue && <AlarmSearch anchorEl={anchorEl}></AlarmSearch>}
          </ModalDialogContent>
          {/* 날짜 및 시간 선택 */}
          <ModalDialogContent dividers>
            <CalendarMonthIcon sx={{ mr: 2 }} />
            {/* 날짜 선택 */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DemoItem>
                  <ModalDatePicker format="YYYY-MM-DD" label="날짜 선택" sx={datePickerStyle} value={date} onChange={(newValue) => setDate(newValue)} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            {/* 시간 선택 */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <ModalTimePicker
                  // label 색상 변경 어케하는겨?
                  label="시간 선택"
                  sx={datePickerStyle}
                  color="yellow.main"
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </ModalDialogContent>
          {/* 이메일 입력 */}
          <ModalDialogContent dividers>
            <AlternateEmailIcon sx={{ mr: 2 }} />
            <ModalTextField
              id="outlined-search"
              label="Email"
              type="email"
              color="yellow"
              onInput={(e) => {
                setEmailAddress(e.target.value);
              }}
              value={emailAddress}
            />
          </ModalDialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleSubmit} color="black">
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const ModalCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #909090;
  cursor: pointer;
`;

const ModalDialogContent = styled(DialogContent)`
  display: flex;
  align-items: center;
  /* 이거 왜 안되냐...? */
  &:nth-child(1) {
    color:red
    margin-right: 10px;
  }
`;

const ModalTextField = styled(TextField)`
  background-color: #f8f8f8;
  width: 100%;
  border-radius: 8px;
`;

const ModalDatePicker = styled(DatePicker)`
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const ModalTimePicker = styled(TimePicker)`
  background-color: #f8f8f8;
  border-radius: 8px;
`;

export default HomeModal;
