import { useState } from "react";
import React from "react";
import NavigateHeader from "../../Components/Header/NavigateHeader";
import { styled } from "styled-components";
import ProfileImg from "../../Components/StyledComponents/ProfileImg";



export default function ProfileSetting () {

  const [nickname, setNickname] = useState(null);

  // const handleInputChange = (event) => {
  //   setNickname(event.target.value);
  // };
  const handleSaveClick = () => {
    const newObj = {
      nickname: nickname
    }
  };

  return(
    <>
      <NavigateHeader headerTitlte={"프로필 설정"}/>

      <Container>
          {/* 프로필이미지 변경 */}
          <ProfileImg/>

          <Form>
            <Label>
                <LabelSpan>별명</LabelSpan>
                <NicknameWrapper>
                    <NicknameInput
                        type="text"
                        placeholder="yourNickname"
                        maxlength="8"
                    />
                </NicknameWrapper>

            </Label>

            {/* 회원가입 버튼 */}
            <JoinBtnWrapper>
                <JoinBtn onClick={handleSaveClick}>회원가입</JoinBtn>
            </JoinBtnWrapper>
          </Form>
      </Container>
    </>

  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const LabelSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #242424;
  margin-bottom: 0.75rem;
`;
const NicknameWrapper = styled.div`
  position: relative;
`;
const NicknameInput = styled.input`
    width: 380px;
    padding: 16px 18px;
    border: 1px solid rgba(213, 213, 213, 1);
    border-radius: 4px;

  &:focus {
    outline: none;
    border: 1px solid rgba(255, 192, 0, 1);
  }
`;
const JoinBtnWrapper = styled.div`
    margin: 6rem 0;
`;
const JoinBtn = styled.button`
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 0.4rem;
  cursor: pointer;
`;