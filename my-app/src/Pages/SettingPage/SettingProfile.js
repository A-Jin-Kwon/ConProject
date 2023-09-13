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
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

import { FlexBox } from "../../Components/StyledComponents/StyledComponents";

const SettingProfile = () => {
  const userInfo = useSelector((state) => state.SettingReducer);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [introduction, setIntrodction] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setUsername(userInfo.name);
    setIntrodction(userInfo.introduction);
  }, [userInfo]);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setIntrodction(event.target.value);

    /*글자 수 50자 초과시 경고 문*/
    setShowWarning(event.target.value.length > 50);
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
        } else if (resCode === 409) {
          // 이름이 중복
        }
      } catch (e) {
        console.log(e);
      }
    }
    postProfileChanged();
  };

  return (
    <>
      <NavigateHeader headerTitlte={"프로필 설정"} />
      <StyledMuiContainer>
        <form onSubmit={handleSubmit}>
          {/* <div className="PS_Wrap_1"><ProfileButton></ProfileButton></div>  건희님 기존 코드 */}
          {/* 프로필 이미지 변경 */}
          <div className="PS_Wrap_1">
            <ProfileImg />
          </div>

          <FlexBox>
            <StyledTypograhpy mr={5}>이름</StyledTypograhpy>
            <Input style={{ width: "90%" }} placeholder="이름" onChange={handleInputChange} required value={username}></Input>
          </FlexBox>
          <FlexBox>
            <StyledTypograhpy mr={5}>자기소개</StyledTypograhpy>
            <Input style={{ width: "90%" }} placeholder="자기소개를 입력하세요(최대 50자)" onChange={handleInputChange2} required value={introduction}></Input>
          </FlexBox>

          <div className="PS_Wrap_4">
            <button className="PS_Wrap_4_Btn">변경사항 저장</button>
          </div>
        </form>
      </StyledMuiContainer>
    </>
  );
};

const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

const StyledTypograhpy = styled(Typography)`
  display: "flex";
  text-align: "center";
  align-items: "center";
  justify-content: "center";
`;

export default SettingProfile;
