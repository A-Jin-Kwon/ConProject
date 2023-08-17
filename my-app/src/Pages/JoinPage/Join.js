import styled from "styled-components";
import JoinRule from "./JoinRule";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import LoginNaver from "../LoginPage/LoginNaver";

const Join = () => {
  const navigate = useNavigate();
  const emailJoinHandler = () => {
    navigate('/join-email');
  };


  const naverRef = useRef()
	const { naver } = window

	const NAVER_CLIENT_ID = "5qae87hNMTZ0AQ5VOOmW"
	const NAVER_CALLBACK_URL = "http://localhost:3000/"

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
			callback() {
				// 로그인 성공 시 처리할 작업
				getToken();
			},
		})
		naverLogin.init();
		// naverLogout.init();
	}

  	const userAccessToken = () => {
		window.location.href.includes('access_token') && getToken()
	}
	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
    	console.log(token);
		// axios 이용, 백엔드와 통신하여 access token을 받아와서 로컬 스토리지 등에 저장하는 작업을 수행
	}

	// const getToken = async () => {
	// 	const token = window.location.href.split('=')[1].split('&')[0];
	// 	try {
	// 	  const response = await axios.post("http://localhost:3000/login/members/sign-up", { token: token });
	// 	  const { access_token } = response.data;
	// 	  localStorage.setItem("access_token", access_token);
	// 	} catch (error) {
	// 	  console.log(error);
	// 	}
	//   }

	useEffect(() => {
		initializeNaverLogin()
		userAccessToken()
	}, [])

	const handleNaverLogin = () => {
		naverRef.current.children[0].click()
	};

  return (
    <Container>
      <div>
        <Header>
            <Title>CON</Title>
            <HeaderTitle>회원가입</HeaderTitle>
        </Header>
      </div>
      {/* 회원가입 방법 */}
      <Form>
        <div>
            {/* 네이버로 회원가입 */}
            <JoinBtn>
                <NaverIdLogin ref={naverRef} id="naverIdLogin" />
                <JoinBtnContent>
                    <img style={{marginRight: "10px"}} alt="join with Naver" src="./imgs/naver_logo.svg"/>
                    <div onClick={handleNaverLogin}>네이버로 회원가입</div>
                </JoinBtnContent>
            </JoinBtn>
            {/* 이메일로 회원가입 */}
            <Link to="/join-check" style={{textDecoration:"none"}}>
              <JoinBtn>
                <JoinBtnContent onClick={emailJoinHandler}>
                    <img style={{marginRight: "10px"}} alt="join with Email" src="./imgs/email_logo.svg"/>
                    <div>이메일로 회원가입</div>
                </JoinBtnContent>
              </JoinBtn>  
            </Link>
          </div>
        <div>
            <span>이미 계정이 있으세요?</span>
            <Link to="/login">로그인</Link>
        </div>
      </Form>
      {/* 이용약관 동의 간주 */}
      <JoinRule />
    </Container>
  )
}

export default Join;


const NaverIdLogin = styled.div`
	display: none;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
        background: rgba(213, 213, 213, 1);
    }
`
const JoinBtnContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;