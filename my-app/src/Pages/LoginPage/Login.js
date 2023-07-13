import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <div>
        <Header>이메일로 로그인하기</Header>
      </div>
      {/* 이메일 비밀번호 폼 */}
      <Form>
        {/* 이메일 */}
        <div>
          <Label>
            <LabelSpan>이메일</LabelSpan>
            <Input placeholder="youremail@email.com" />
          </Label>
        </div>
        {/* 비밀번호 */}
        <div>
          <Label>
            <LabelSpan>비밀번호</LabelSpan>
            <Input placeholder="비밀번호 입력" />
          </Label>
        </div>
        {/* 로그인 */}
        <div>
          <LoginBtn>로그인</LoginBtn>
        </div>
      </Form>
      {/* 로그인 밑 요소 */}
      <div>
        <span>계정이 없으세요?</span>
        <Link>회원가입</Link>
        <Link>비밀번호 찾기</Link>
      </div>
    </div>
  );
};

export default Login;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const LoginBtn = styled.button`
  box-shadow: none;
  width: 380px;
  height: 48px;
  padding: 16px 130px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 0.4rem;
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
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #d5d5d5;
  padding: 16px 18px;
  width: 380px;
`;
const Header = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
`;
