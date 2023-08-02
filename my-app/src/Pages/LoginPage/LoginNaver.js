import React, {Component} from 'react';

class LoginNaver extends Component {
    componentDidMount() {
        const naverScript = document.createElement('script');
        naverScript.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
        naverScript.type = "text/javascript";
        document.head.appendChild(naverScript);

        naverScript.onload = () => {
            const naverLogin = new window.naver.LoginWithNaverId({
                clientId: 'Rjdcguo0ogppErYYtIwR',
                callbackUrl: 'http://localhost:3000/LoginNaver-Callback',
                callbackHandle: true,
                isPopup: true,
                loginButton: {
                    color: "green",
                    type: 3,
                    height: 48,
                    width: 416
                }
            });

            naverLogin.init();
            naverLogin.logout();
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log("Naver 로그인 상태", naverLogin.user);
                    const {id, email} = naverLogin.user;

                    if (id === undefined) {
                        alert("아이디는 필수동의");
                        naverLogin.reprompt();
                        return;
                    }
                    else if (email === undefined) {
                        alert("이메일은 필수동의");
                        naverLogin.reprompt();
                        return;
                    }
                } else {
                    console.log('Naver 비로그인 상태');
                }
            })
        }
    }
    render () {
        return <div id="naverIdLogin"></div>
    }
}

export default LoginNaver;
