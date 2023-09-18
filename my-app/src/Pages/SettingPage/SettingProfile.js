import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../../Components/StyledComponents/ProfileImg";
import NavigateHeader from "../../Components/Header/NavigateHeader";
import { styled } from "styled-components";
import axios from "axios";
import { baseServerURL } from "../../Components/StyledComponents/StyledComponents";
import { useNavigate } from "react-router-dom";

//material-ui
import { StyledMuiContainer } from "../HomePage/MyHome";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple, pink } from "@mui/material/colors";

import { FlexBox } from "../../Components/StyledComponents/StyledComponents";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc000",
      // disable: "#b28900",
    },
    // disable: "#b28900",
    secondary: purple,
  },
});

const SettingProfile = () => {
  const userInfo = useSelector((state) => state.SettingReducer);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [introduction, setIntrodction] = useState("");
  const [showIntroWarning, setShowIntroWarning] = useState(false);
  const [nameSetError, setNameSetError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(false);

  useEffect(() => {
    setUsername(userInfo.name);
    setIntrodction(userInfo.introduction);
  }, [userInfo]);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
    setNameSetError(false);
  };

  const handleInputChange2 = (event) => {
    setIntrodction(event.target.value);
    /*글자 수 50자 초과시 경고 문*/
    setShowIntroWarning(event.target.value.length > 50);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = localStorage.getItem("auth");
    const formData = new FormData();
    formData.append("name", username);
    formData.append("introduction", introduction);
    // 프로필 사진은 나중에...
    // formData.append("imageFile", null);
    async function postProfileChanged() {
      try {
        const res = await axios.post(baseServerURL + "/members/profile", formData, { headers: { Authorization: auth } });
        console.log(res);
        const resCode = res.data.code;
        if (resCode === 200) {
          // save successed
          alert("변경완료!");
        } else if (resCode === 409) {
          // 이름이 중복
          setNameSetError(true);
          setNameErrorMessage(res.data.message);
        }
      } catch (e) {
        console.log(e);
      }
    }
    postProfileChanged();
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigateHeader headerTitlte={"프로필 설정"} />
      <StyledMuiContainer>
        {/* <div className="PS_Wrap_1"><ProfileButton></ProfileButton></div>  건희님 기존 코드 */}
        {/* 프로필 이미지 변경 */}
        <div className="PS_Wrap_1">
          <ProfileImg />
        </div>
        <Box sx={{ m: 2 }}>
          <MuiFlexBox>
            <StyledTypograhpy mr={5}>이름</StyledTypograhpy>
            <Input style={{ width: "90%" }} error={nameSetError} placeholder="이름" onChange={handleInputChange} required value={username}></Input>
          </MuiFlexBox>
          {nameSetError ? <ErrorMessage>{nameErrorMessage}</ErrorMessage> : <></>}
        </Box>

        <Box sx={{ m: 2 }}>
          <MuiFlexBox>
            <StyledTypograhpy mr={5}>자기소개</StyledTypograhpy>
            <Input style={{ width: "90%" }} placeholder="자기소개를 입력하세요(최대 50자)" error={showIntroWarning} onChange={handleInputChange2} required value={introduction}></Input>
          </MuiFlexBox>
          {showIntroWarning ? <ErrorMessage>50자를 초과했습니다!</ErrorMessage> : <></>}
        </Box>

        <div className="PS_Wrap_4">
          <StyledButton
            onClick={handleSubmit}
            type="button"
            variant="contained"
            disable={username && introduction ? "false" : "true"}
            sx={{
              backgroundColor: () => (username && introduction ? "#ffc000" : "#ededed"),
              "&:hover": {
                backgroundColor: () => (username && introduction ? "" : "#b1b1b1"),
              },
            }}
          >
            변경사항 저장
          </StyledButton>
        </div>
      </StyledMuiContainer>
    </ThemeProvider>
  );
};

const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

const StyledTypograhpy = styled(Typography)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const MuiFlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 270px;
  height: 50px;
`;

export default SettingProfile;
