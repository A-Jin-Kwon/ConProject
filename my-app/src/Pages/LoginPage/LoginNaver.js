import styled from "styled-components";
import { useEffect, useRef } from "react";

const LoginNaver = ({ setGetToken, setUserInfo }) => {
  const naverRef = useRef();
  const { naver } = window;

  const NAVER_CLIENT_ID = "X58rQNkatvImLCjdhG8I";
  const NAVER_CALLBACK_URL = "http://localhost:3000/loginNaver-Callback";

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();

    // useEffect 내에서 토큰 추출 및 처리
    const userAccessToken = () => {
      if (window.location.href.includes("access_token")) {
        const token = window.location.href.split("=")[1].split("&")[0];
        // 토큰을 상태로 저장하거나 원하는 처리를 수행합니다.
        setGetToken(token);
      }
    };
    userAccessToken();
  });

  // const userAccessToken = () => {
  // 	window.location.href.includes('access_token') && getToken()
  // }
  // const getToken = () => {
  // 	const token = window.location.href.split('=')[1].split('&')[0]
  // }

  // useEffect(() => {
  // 	initializeNaverLogin()
  // 	userAccessToken()
  // }, [])

  const handleNaverLogin = () => {
    // naverRef.current.children[0].click()
    LoginNaver.login();
  };

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>네이버로 로그인</NaverLoginBtn>
    </>
  );
};
export default LoginNaver;

// 기존 지정된 로그인 버튼 모양 안 보이도록 함
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
