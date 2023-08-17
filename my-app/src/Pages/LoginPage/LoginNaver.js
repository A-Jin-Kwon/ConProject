import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import axios from "axios";


const LoginNaver = ({ setGetToken, setUserInfo }) => {
      
  	const naverRef = useRef()
	const { naver } = window

	const NAVER_CLIENT_ID = "X58rQNkatvImLCjdhG8I"
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
		<>
      {/* 태그에 id="naverIdLogin" 필요 */}
      {/* 기존 네아로 버튼 */}
			<NaverIdLogin ref={naverRef} id="naverIdLogin" />

      {/* 커스텀 네아로 버튼 */}
			<NaverLoginBtn onClick={handleNaverLogin}>네이버로 로그인</NaverLoginBtn>
		</>
	)
}
export default LoginNaver;


// 기존 로그인 버튼 모양 안 보이도록 함
const NaverIdLogin = styled.div`
	display: none;
`;

const NaverLoginBtn = styled.button`
	display: flex;
	align-items: center;
  justify-content: center;
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(3, 225, 102, 1);
  border-radius: 0.4rem;
  cursor: pointer;
`;
