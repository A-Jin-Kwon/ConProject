import styled from "styled-components";
import { useState } from "react";
import JoinEmailHeader from "./JoinEmailHeader";

const JoinEmail = () => {
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

    if(emailInput === ''){
      setIsEmailValid(true);
    }
    else{
      if(checkEmailValid()){
        setIsEmailValid(true);
        console.log("형식에 맞는 이메일!");
      }
      else{
        setIsEmailValid(false);
        console.log("형식에 맞지 않는 이메일!");
      }
    }
  };

  const [isNameFocused, setIsNameFocused] = useState(false);
  const NamefocusHandler = () => {
    setIsNameFocused(true);
  };
  const NameblurHandler = () => {
    setIsNameFocused(false);
  };


  // 이메일 입력값을 저장합니다.
  const [emailInput, setEmailInput] = useState('');
  const changeHandler = (e) => {
    setEmailInput(e.target.value);
    console.log(emailInput);
  };

    // 이름 입력값을 저장합니다.
    const [nameInput, setNameInput] = useState('');
    const NameChangeHandler = (e) => {
        setNameInput(e.target.value);
    };
  

  // 이메일 형식을 확인하는 함수
  const checkEmailValid = () => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    return emailRegEx.test(emailInput);
  };

  // 이메일 x버튼을 누를 때 발생하는 함수
  const cancelHandler = () => {
    setEmailInput('');
  };
  const nameCancelHandler = () => {
    setNameInput('');
  };

  // 비밀번호 보이기는 true, 숨기기는 false입니다.
  const [showPassword, setShowPassword] = useState(true);
  const visibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  // 확인 비밀번호 보이기는 true, 숨기기는 false입니다.
  const [showCheckPassword, setShowCheckPassword] = useState(true);
  const visibilityCheckHandler = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  // 폼 submit 시, 발생하는 함수입니다.
  const submitHandler = (e) => {
    e.preventDefault();

    if(pwdInput==='' || checkPwdInput===''){
        console.log("비번 또는 확인 비번이 입력되지 않았습니다.");
    }
    else{
        if(pwdInput === checkPwdInput){
            console.log("비번과 확인 비번이 일치합니다.");
        }
        else{
            console.log("비번과 확인 비번이 일치하지 않습니다.");
        }
    }
  };

//   비번, 확인 비번 저장
  const [pwdInput, setPwdInput] = useState('');
  const [checkPwdInput, setCheckPwdInput] = useState('');
  const pwdChangeHandler = (e) => {
    setPwdInput(e.target.value);
  };
  const checkPwdChangeHandler = (e) => {
    setCheckPwdInput(e.target.value);
  };

  return (
    <div>
      <JoinEmailHeader/>

      <ContentsWrapper>
      <div>
        <Header>이메일로 회원가입하기</Header>
      </div>

      <Form onSubmit={submitHandler}>
        {/* 이름 */}
        <div>
          <Label>
            <LabelSpan>이름</LabelSpan>
            <NameWrapper>
                <NameInput
                  placeholder="your name"
                  onFocus={NamefocusHandler}
                  onBlur={NameblurHandler}
                  onChange={NameChangeHandler}
                  value={nameInput}
                />
              {/* focus 상태라면 이미지를 보여주고, blur 되었다면 이미지를 숨깁니다. */}
              {isNameFocused ?
                <IconEmail src="imgs/cancel.png" 
                  // onMouseDown으로, onClick 보다 blur 이벤트가 먼저 실행되는 것을 방지할 수 있습니다.
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onClick={nameCancelHandler}
                />
              : null}
            </NameWrapper>
          </Label>
        </div>

        {/* 이메일 */}
        <div>
          <Label>
            <LabelSpan>이메일</LabelSpan>
            <EmailWrapper>
                <EmailInput
                  placeholder="youremail@email.com"
                  onFocus={EmailfocusHandler}
                  onBlur={EmailblurHandler}
                  onChange={changeHandler}
                  value={emailInput}
                  isEmailValid={isEmailValid}
                />
              {/* focus 상태라면 이미지를 보여주고, blur 되었다면 이미지를 숨깁니다. */}
              {isEmailFocused ?
                <IconEmail src="imgs/cancel.png" 
                  // onMouseDown으로, onClick 보다 blur 이벤트가 먼저 실행되는 것을 방지할 수 있습니다.
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onClick={cancelHandler}
                />
              : isEmailValid ? null : <IconError src="imgs/error.png"/>}
            </EmailWrapper>

            {/* 이메일 형식이 바르지 않다면 에러 메세지를 띄웁니다. */}
            {isEmailValid ? null 
              : <ErrorMessage>
                  올바른 이메일 형태로 입력해주세요.
                </ErrorMessage>
            }
          </Label>
        </div>
        {/* 비밀번호 */}
        <div>
          <Label>
            <LabelSpan>비밀번호</LabelSpan>
            <PasswordWrapper>
              <PasswordInput
                placeholder="비밀번호 입력"
                type={showPassword ? "text" : "password"}
                onChange={pwdChangeHandler}
              />
              <IconPassword
                src={showPassword ? "imgs/visibility.png" : "imgs/visibility_off.png"}
                onClick={visibilityHandler}
              />
            </PasswordWrapper>
          </Label>
        </div>
        {/* 비밀번호 확인 */}
        <div>
          <Label>
            <LabelSpan>비밀번호 확인</LabelSpan>
            <PasswordWrapper>
              <PasswordInput
                placeholder="비밀번호 입력"
                type={showCheckPassword ? "text" : "password"}
                onChange={checkPwdChangeHandler}
              />
              <IconPassword
                src={showCheckPassword ? "imgs/visibility.png" : "imgs/visibility_off.png"}
                onClick={visibilityCheckHandler}
              />
            </PasswordWrapper>
          </Label>
        </div>

        {/* 회원가입 */}
        <JoinBtnWrapper>
          <JoinBtn>가입하기</JoinBtn>
        </JoinBtnWrapper>
      </Form>

      </ContentsWrapper>
    </div>
  );
};

export default JoinEmail;

const ContentsWrapper = styled.div`
  height: calc(100vh - 71px);
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
const NameWrapper = styled.div`
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
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const JoinBtnWrapper = styled.div`
  margin: 1.5rem 0;
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

  border: ${({isEmailValid}) => (
    isEmailValid ? '1px solid #d5d5d5' : '1px solid #E61A1A'
  )};

  &:focus {
    outline: none;
    border: 1px solid #ffc000;
  }
`;
const NameInput = styled.input`
  border-radius: 4px;
  padding: 16px 18px;
  width: 380px;
  border: 1px solid #d5d5d5;

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