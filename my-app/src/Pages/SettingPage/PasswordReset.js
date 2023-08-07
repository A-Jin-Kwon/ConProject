import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import NavigateHeader from "../../Components/Header/NavigateHeader";


const Login = () => {

  // 비밀번호 보이기는 true, 숨기기는 false입니다.
  const [showPassword, setShowPassword] = useState(true);
  const visibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  // 폼 submit 시, 발생하는 함수입니다.
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavigateHeader headerTitlte={"비밀번호 재설정"}/>

      <Container>
        {/* 비밀번호 폼 */}
        <Form onSubmit={submitHandler}>
          {/* 현재 비밀번호 */}
          <div>
            <Label>
              <LabelSpan>현재 비밀번호</LabelSpan>
              <PasswordWrapper>
                <PasswordInput
                  placeholder="비밀번호 입력"
                  type={showPassword ? "text" : "password"}
                />
                <IconPassword
                  src={showPassword ? "imgs/visibility_off.svg" : "imgs/visibility.svg"}
                  onClick={visibilityHandler}
                />
              </PasswordWrapper>
            </Label>
          </div>
          {/* 새로운 비밀번호 */}
          <div>
            <Label>
              <LabelSpan>새로운 비밀번호</LabelSpan>
              <PasswordWrapper>
                <PasswordInput
                  placeholder="새로운 비밀번호 입력"
                  type={showPassword ? "text" : "password"}
                />
                <IconPassword
                  src={showPassword ? "imgs/visibility_off.svg" : "imgs/visibility.svg"}
                  onClick={visibilityHandler}
                />
              </PasswordWrapper>
            </Label>
          </div>
          {/* 다음 */}
          <LoginBtnWrapper>
            <LoginBtn>다음</LoginBtn>
          </LoginBtnWrapper>
        </Form>
        {/* 로그인 밑 요소 */}
        <BottomWrapper>
          <BottomFindPassword to="/password-find">비밀번호 찾기</BottomFindPassword>
        </BottomWrapper>
      </Container>
    </div>
  );
};

export default Login;

const Container = styled.div`
  /* padding-top: 200px; */
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PasswordWrapper = styled.div`
  position: relative;
`;
const IconPassword = styled.img`
  position: absolute;
  top: 17px;
  left: 370px;
  width: 28px;
  height: 16px;
  color: #b1b1b1;
  cursor: pointer;
`;
const BottomFindPassword = styled(Link)`
  text-decoration: none;
  color: #464646;
`;
const BottomWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 416px;
  margin: 0.75rem auto 0;
  font-size: 14px;
  color: #242424;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const LoginBtnWrapper = styled.div`
  margin: 1.5rem 0;
`;
const LoginBtn = styled.button`
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 0.4rem;
  cursor: pointer;
`;
const LabelSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #242424;
  margin-bottom: 0.75rem;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const PasswordInput = styled.input`
  border-radius: 4px;
  padding: 16px 18px;
  width: 380px;
  border: 1px solid #d5d5d5;

  &:focus {
    outline: none;
    border: 1px solid #ffc000;
  }
`;