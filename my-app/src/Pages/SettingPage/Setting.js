import { Link } from "react-router-dom";
import { useState } from "react";

const Setting = ()=>{

    const [settingpage, setSettingPage] = useState("setting");
    const clickHandler = (e) => {
        console.log(e.target.id);
        setSettingPage(e.target.id);
    };

    const [username, setUsername] = useState('닉네임');
    const [introduction, setIntroduction] = useState('한 줄 소개');
  
    
    return(
        <div className="BigWrap" style={{fontFamily:'NanumSquareNeo'}}>
            <div className="Profile">
                <div className="Pf_1"></div>
                <div className="Pf_2">
                    <div className="Pf_2_1">{username}</div>
                    <div className="Pf_2_2">{introduction}</div>
                    <div className="Pf_2_3">팔로잉 10 · 팔로워 5</div>
                </div>
            </div>
            <div className="SelectMenu">
                <div className="SM_1">
                    <div className="SM_1_1"><h4>기본 설정</h4></div>
                    <Link to="/myInformation" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                    <div className="SM_1_2" to={'/myInformation'} id="myInformation" onClick={clickHandler} settingpage={settingpage}><h4>내 정보 관리</h4></div></Link>
                    <Link to="/profileSetting" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                    <div className="SM_1_3"to={'/profileSetting'} id="profileSetting" onClick={clickHandler} settingpage={settingpage}><h4>프로필 설정</h4></div></Link>
                </div>
                <div className="SM_2">
                   <div className="SM_2_1"><h4>고객센터</h4></div>
                   <div className="SM_2_2"><h4>공지사항</h4></div>
                   <div className="SM_2_3"><h4>문의사항</h4></div>
                </div>
                <div className="SM_3">
                    <div className="SM_3_1"><h4>정보</h4></div>
                    <div className="SM_3_2"><h4>이용약관</h4></div>
                    <div className="SM_3_3"><h4>개인정보 정책</h4></div>
                    <div className="SM_3_4"><h4>오픈소스</h4></div>
                    <div className="SM_3_5"><h4>버전</h4></div>
                    <div className="SM_3_6"><h4>로그아웃</h4></div>
                </div>
            </div>
        </div>
    );
};
export default Setting;