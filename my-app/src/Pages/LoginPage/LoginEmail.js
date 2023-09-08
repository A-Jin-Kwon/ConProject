import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const baseServerURL = `http://34.125.244.221:8080`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 이메일 값이 유효한지 아닌지 저장하는 state입니다.
  const [isEmailValid, setIsEmailValid] = useState(true);

  // 이메일 input의 focus를 감지하는 state입니다.
  // focus 시, cancel 이미지를 보여주기 위함입니다.
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const EmailfocusHandler = () => {
    setIsEmailFocused(true);
    setIsEmailValid(true);
  };
  const EmailblurHandler = () => {
    setIsEmailFocused(false);

    if (emailInput === "") {
      setIsEmailValid(true);
    } else {
      if (checkEmailValid()) {
        setIsEmailValid(true);
        console.log("형식에 맞는 이메일!");
      } else {
        setIsEmailValid(false);
        console.log("형식에 맞지 않는 이메일!");
      }
    }
  };

  // 이메일 입력값을 저장합니다.
  const [emailInput, setEmailInput] = useState("");
  const changeHandler = (e) => {
    setEmailInput(e.target.value);
    console.log(emailInput);
  };

  // 이메일 형식을 확인하는 함수
  const checkEmailValid = () => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    return emailRegEx.test(emailInput);
  };

  // 이메일 x버튼을 누를 때 발생하는 함수
  const cancelHandler = () => {
    setEmailInput("");
  };

  // 비밀번호 입력 관리
  const [pwdInput, setPwdInput] = useState("");
  const handlePwdInput = (e) => {
    setPwdInput(e.target.value);
  };

  // 비밀번호 보이기는 true, 숨기기는 false입니다.
  const [showPassword, setShowPassword] = useState(true);
  const visibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  // 폼 submit 시, 발생하는 함수입니다.
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(baseServerURL + "/login", { email: emailInput, password: pwdInput });
      console.log(res);
      localStorage.setItem("auth", res.headers.authorization);
      //이건 안 됨
      // localStorage.setItem("auth-refresh", res.headers.authorization_refresh);
      //
      if (res.status === 200) {
        dispatch({ type: "login" });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div>
        <Header>이메일로 로그인하기</Header>
      </div>
      {/* 이메일 비밀번호 폼 */}
      <Form onSubmit={submitHandler}>
        {/* 이메일 */}
        <div>
          <Label>
            <LabelSpan>이메일</LabelSpan>
            <EmailWrapper>
              <EmailInput placeholder="youremail@email.com" onFocus={EmailfocusHandler} onBlur={EmailblurHandler} onChange={changeHandler} value={emailInput} isEmailValid={isEmailValid} />
              {/* focus 상태라면 이미지를 보여주고, blur 되었다면 이미지를 숨깁니다. */}
              {isEmailFocused ? (
                <IconEmail
                  src="imgs/cancel.svg"
                  // onMouseDown으로, onClick 보다 blur 이벤트가 먼저 실행되는 것을 방지할 수 있습니다.
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onClick={cancelHandler}
                />
              ) : isEmailValid ? null : (
                <IconError src="imgs/error.svg" />
              )}
            </EmailWrapper>

            {/* 이메일 형식이 바르지 않다면 에러 메세지를 띄웁니다. */}
            {isEmailValid ? null : <ErrorMessage>올바른 이메일 형태로 입력해주세요.</ErrorMessage>}
          </Label>
        </div>
        {/* 비밀번호 */}
        <div>
          <Label>
            <LabelSpan>비밀번호</LabelSpan>
            <PasswordWrapper>
              <PasswordInput placeholder="비밀번호 입력" type={showPassword ? "password" : "text"} onChange={handlePwdInput} />
              <IconPassword src={showPassword ? "imgs/visibility_off.svg" : "imgs/visibility.svg"} onClick={visibilityHandler} />
            </PasswordWrapper>
          </Label>
        </div>
        {/* 로그인 */}
        <LoginBtnWrapper>
          <LoginBtn>로그인</LoginBtn>
        </LoginBtnWrapper>
      </Form>
      {/* 로그인 밑 요소 */}
      <BottomWrapper>
        <div>
          <span>계정이 없으세요?</span>
          <BottomJoin to="/join">회원가입</BottomJoin>
        </div>
        <BottomFindPassword to="/password-find">비밀번호 찾기</BottomFindPassword>
      </BottomWrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconError = styled.img`
  position: absolute;
  top: 15px;
  left: 376px;
`;
const EmailWrapper = styled.div`
  position: relative;
`;
const IconEmail = styled.img`
  position: absolute;
  top: 15px;
  left: 376px;
  width: 19px;
  height: 19px;
  color: #b1b1b1;
  cursor: pointer;
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
const BottomJoin = styled(Link)`
  color: #464646;
  margin-left: 0.45rem;
`;
const BottomFindPassword = styled(Link)`
  text-decoration: none;
  color: #464646;
`;
const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
const EmailInput = styled.input`
  border-radius: 4px;
  padding: 16px 18px;
  width: 380px;

  border: ${({ isEmailValid }) => (isEmailValid ? "1px solid #d5d5d5" : "1px solid #E61A1A")};

  &:focus {
    outline: none;
    border: 1px solid #ffc000;
  }
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
const Header = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
`;
const ErrorMessage = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #e61a1a;
`;
