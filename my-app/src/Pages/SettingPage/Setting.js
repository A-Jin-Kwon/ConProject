import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "styled-components";

const Setting = ()=>{

    const [settingpage, setSettingPage] = useState("setting");
    const clickHandler = (e) => {
        console.log(e.target.id);
        setSettingPage(e.target.id);
    };

    const [username, setUsername] = useState('닉네임');
    const [introduction, setIntroduction] = useState('한 줄 소개');
  
    
    return(
        <div className="BigWrap">
            <div className="Profile">
                <div className="Pf_1"></div>
                <div className="Pf_2">
                    <div className="Pf_2_1">{username}</div>
                    <div className="Pf_2_2"></div>
                    <div className="Pf_2_3">{introduction}</div>
                </div>
                <Pf_3>
                    <Pf_3_1>
                        <Pf_3_1_1 style={{paddingLeft:'30px', height:'20px', marginTop:'20px'}}>10</Pf_3_1_1>
                        <Link to="/setting/following" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                        <Pf_3_1_1 style={{height:'20px', paddingLeft:'20px', cursor:'pointer'}}>팔로잉</Pf_3_1_1></Link>
                    </Pf_3_1>
                    <Pf_3_2>
                        <Pf_3_1_2 style={{paddingLeft:'30px', height:'20px', marginTop:'20px'}}>5</Pf_3_1_2>
                        <Link to="/setting/follower" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                        <Pf_3_1_2 style={{height:'20px', paddingLeft:'16px', cursor:'pointer'}}>팔로워</Pf_3_1_2></Link>
                    </Pf_3_2>
                </Pf_3>
            </div>
            <div className="SelectMenu">
                <div className="SM_1">
                    <div className="SM_1_1"><h4>기본 설정</h4></div>
                    <Link to="/myInformation" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                        <div className="SM_1_2" to={'/myInformation'} id="myInformation" onClick={clickHandler} settingpage={settingpage}><h4>내 정보 관리</h4></div></Link>
                    <Link to="/settingProfile" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                        <div className="SM_1_3"to={'/profileSetting'} id="profileSetting" onClick={clickHandler} settingpage={settingpage}><h4>프로필 설정</h4></div></Link>
                </div>
                <div className="SM_2">
                    <div className="SM_2_1"><h4>고객센터</h4></div>
                    <Link to="/cornNotice" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                        <div className="SM_1_2" to={'/cornNotice'} id="cornNotice" onClick={clickHandler} settingpage={settingpage}><h4>공지사항</h4></div></Link>
                    <Link to="/cornFAQ" style={{textDecoration:'none', cursor: 'pointer', color:"black"}}>
                        <div className="SM_1_2" to={'/cornFAQ'} id="cornFAQ" onClick={clickHandler} settingpage={settingpage}><h4>FAQ</h4></div></Link>
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

const Pf_3 = styled.div`
    display: flex;
    flex-direction: row;
    width: 172px;
    height: 76px;
    /* width: 16%;
    height: 80%; */
    margin-top: 5px;
    background-color: rgba(242, 242, 242, 1);
    border-radius: 12px;
`
const Pf_3_1 = styled.div`
    border-right: 1px solid rgba(230, 230, 230, 1); 
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;     
`
const Pf_3_2 = styled.div`
    width: 50%;
    height: 100%;
`
const Pf_3_1_1 = styled.div`
    width: 100%;
    height: 50%;
`
const Pf_3_1_2 = styled.div`
    width: 100%;
    height: 50%;
`
