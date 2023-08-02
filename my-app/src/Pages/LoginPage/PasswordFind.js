import PasswordFindHeader from "./PasswordFindHeader";
import { styled } from "styled-components";
import { useState } from "react";

const PasswordFind = () => {
    // 폼 submit 시, 발생하는 함수입니다.
    const submitHandler = (e) => {
        e.preventDefault();
    };
    // 이메일 인풋 창 기본 설정 및 값 반영
    const [emailInput, setEmailInput] = useState('');
    const changeHandler = (e) => {
        setEmailInput(e.target.value);
    }
    // 이메일 값이 유효한지 아닌지 저장하는 state입니다.
    const [isEmailValid, setIsEmailValid] = useState(true);
    // 이메일 input의 focus를 감지하는 state입니다.
    // focus 시, cancel 이미지를 보여주기 위함입니다.
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const emailFocusHandler = () => {
        setIsEmailFocused(true);
        setIsEmailValid(true);
    };
    // 이메일 형식을 확인하는 함수
    const checkEmailValid = () => {
        const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        return emailRegEx.test(emailInput);
    };
    const emailBlurHandler = () => {
        setIsEmailFocused(false);

        if (emailInput === '') {
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
    }



    return(
        <>
            <PasswordFindHeader />
            <Container>
                <Form onSubmit={submitHandler}>
                    <Label>
                        <LabelSpan>이메일</LabelSpan>
                        <EmailWrapper>
                            <EmailInput
                                placeholder="youremail@email.com"
                                value={emailInput}
                                onChange={changeHandler}
                                onFocus={emailFocusHandler}
                                isEmailValid={isEmailValid}
                            />

                        </EmailWrapper>

                        {/* 이메일 형식이 바르지 않다면 에러 메세지를 띄웁니다. */}
                        {isEmailValid ? null : <ErrorMessage> 올바른 이메일 형태로 입력해주세요.</ErrorMessage>}
                    </Label>

                    {/* 비밀번호 찾기용 이메일 전송 버튼 */}
                    <EmailSendBtnWrapper>
                        <EmailSendBtn>확인</EmailSendBtn>
                    </EmailSendBtnWrapper>
                </Form>
            </Container>
        </>
    );
}

export default PasswordFind;

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
const EmailWrapper = styled.div`
  position: relative;
`;
const EmailInput = styled.input`
    width: 380px;
    padding: 16px 18px;
    border: 1px solid rgba(213, 213, 213, 1);
    border-radius: 4px;
    
    border: ${({isEmailValid}) => (
    isEmailValid ? '1px solid #d5d5d5' : '1px solid #E61A1A'
  )};

  &:focus {
    outline: none;
    border: 1px solid #ffc000;
  }
`
const EmailSendBtnWrapper = styled.div`
    margin: 6rem 0;
`
const ErrorMessage = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #e61a1a;
`
const EmailSendBtn = styled.button`
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 0.4rem;
  cursor: pointer;
`