import styled from "styled-components";
import { Link } from "react-router-dom";
import JoinRule from "../../Components/Join/JoinRule";


export default function Join() {
  return (
    <div>
      <div>
        <Header>
            <Title style={{marginRight: "10px"}}>CON</Title>
            <HeaderTitle>회원가입</HeaderTitle>
        </Header>
      </div>
      {/* 회원가입 방법 */}
      <Form>
        <div>
            {/* 네이버로 회원가입 */}
            <JoinBtn>
                <BtnContent>
                    <img style={{marginRight: "10px"}} alt="join with Naver" src="./imgs/naver_logo.png"/>
                    <div>네이버로 회원가입</div>
                </BtnContent>
            </JoinBtn>
            {/* 이메일로 회원가입 */}
            <JoinBtn>
                <BtnContent>
                    <img style={{marginRight: "10px"}} alt="join with Email" src="./imgs/email_logo.png"/>
                    <div>이메일로 회원가입</div>
                </BtnContent>
            </JoinBtn>
        </div>
        <div>
            <span>이미 계정이 있으세요?</span>
            <Link to="/login">로그인</Link>
        </div>
      </Form>
      {/* 회원가입 밑 요소 */}
      <JoinRule />
    </div>
  )
}



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
  font-weight: 900;
  font-size: 28px;
  line-height: 34.13px;
  color: rgba(255, 192, 0, 1);
`;
const HeaderTitle = styled.p`
  display: flex;
  font-family: "NanumSquareNeoTitle";
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 30.94px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const JoinBtn = styled.button`
  width: 380px;
  height: 54px;
  box-shadow: none;
  background: rgba(255, 255, 255, 1);
  color: rgba(36, 36, 36, 1);
  border: 1px solid rgba(213, 213, 213, 1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: 1rem;  
  font-family: "NanumSquareNeoContents";
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
        background: rgba(213, 213, 213, 1);
    }
`
const BtnContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
