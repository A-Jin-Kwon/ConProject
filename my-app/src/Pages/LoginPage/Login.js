import styled from "styled-components";
import { Link } from "react-router-dom";
import JoinRule from "../JoinPage/JoinRule";
import LoginNaver from "./LoginNaver";

const Login = () => {
  return (
    <Form>
      <ConLogo alt="CON" src="./imgs/ConLoginImg.svg" />
      <Header>
        <Title>CON</Title>
        <HeaderTitle>으로 문화를 기록해보세요!</HeaderTitle>
      </Header>

      {/* 이메일로 로그인하기 버튼 */}
      <LoginBtnWrapper>
        <Link to="/login-email" style={{ textDecoration: "none", color: "black" }}>
          <EmailLoginBtn to="/login-email">이메일로 로그인</EmailLoginBtn>
        </Link>
      </LoginBtnWrapper>

      {/* 네이버로 로그인하기 버튼 */}
      <LoginBtnWrapper>
        <LoginNaver />
      </LoginBtnWrapper>

      {/* 로그인 밑 요소 */}
      <BottomWrapper>
        <div>
          <span>계정이 없으세요?</span>
          <BottomJoin to="/join">회원가입</BottomJoin>
        </div>
        <BottomFindPassword to="/password-find">비밀번호 찾기</BottomFindPassword>
      </BottomWrapper>
      <JoinRule />
    </Form>
  );
};

export default Login;

const ConLogo = styled.img`
  width: 419px;
  height: 399px;
  padding-left: 90px;
`;
const Form = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  display: flex;
  flex-direction: row;
`;
const Title = styled.p`
  display: flex;
  font-family: "Montserrat";
  justify-content: center;
  font-size: 28px;
  line-height: 34.13px;
  color: rgba(255, 192, 0, 1);
  margin-right: 10px;
`;
const HeaderTitle = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 28px;
  line-height: 30.94px;
`;

const LoginBtnWrapper = styled.div`
  margin: 5px 0;
`;
const EmailLoginBtn = styled.button`
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 0.4rem;
  cursor: pointer;
`;

// const LoginNaverBtn = styled.button`
//   box-shadow: none;
//   width: 416px;
//   height: 48px;
//   background-color: rgba(255, 255, 255, 1);
//   border: 1px solid rgba(3, 225, 102, 1);
//   border-radius: 0.4rem;
//   cursor: pointer;
// `

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 416px;
  margin: 0.75rem auto 0;
  font-size: 14px;
  color: #242424;
`;
const BottomJoin = styled(Link)`
  color: #464646;
  margin-left: 0.45rem;
`;
const BottomFindPassword = styled(Link)`
  text-decoration: none;
  color: #464646;
`;
