import styled from "styled-components";
import { Link } from "react-router-dom";
import JoinRule from "../../Components/Join/JoinRule";

const Login = () => {
    return (
        <>
            <img alt="CON" src="./imgs/loginConImg.png"/>
            <Header>
                <Title style={{marginRight: "10px"}}>CON</Title>
                <HeaderTitle>으로 문화를 기록해보세요!</HeaderTitle>
            </Header>
            {/* 로그인 버튼 */}
            <LoginBtnWrapper>
                <LoginBtn to="/login-email">로그인</LoginBtn>
            </LoginBtnWrapper>
            {/* 로그인 밑 요소 */}
            <BottomWrapper>
                <div>
                    <span>계정이 없으세요?</span>
                    <BottomJoin to='/join'>회원가입</BottomJoin>
                </div>
                <BottomFindPassword>비밀번호 찾기</BottomFindPassword>
            </BottomWrapper>
            <JoinRule/>
        </>
    );
}

export default Login;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  display: flex;
  font-family: "Montserrat";
  justify-content: center;
  font-weight: 900;
  font-size: 28px;
  line-height: 34.13px;
  color: rgba(255, 192, 0, 1);
`;
const HeaderTitle = styled.p`
  display: flex;
  font-family: "NanumSquareNeoTitle";
  justify-content: center;
  font-weight: 400;
  font-size: 28px;
  line-height: 30.94px;
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