import { Link } from "react-router-dom";
import { useState } from "react";


const MyInformation = ()=>{

    const [settingpage, setSettingPage] = useState("myInformation");
    const clickHandler = (e) => {
        console.log(e.target.id);
        setSettingPage(e.target.id);
    };

    return(
        <div style={{fontFamily:'NanumSquareNeo'}}>
            <header className="MI_Header">
            <Link to="/setting" style={{textDecoration:'none', cursor: 'pointer', color:"black", marginLeft:"10%"}}>
                <div className="MI_Header_1" to={'/setting'} id="backToSetting" onClick={clickHandler} settingpage={settingpage}>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</h2></div></Link>
                <div className="MI_Header_2"><h4>내 정보 관리</h4></div>
            </header>
            <div className="Info_Wrap">
                <div className="Info_Wrap_1">
                    <div className="Info_Wrap_1_1"><h4>연동된 이메일</h4></div>
                    <div className="Info_Wrap_1_2"><h2>youremail@abcd.com</h2></div>
                </div>
                <div className="Info_Wrap_2">
                    <div className="Info_Wrap_2_1">
                        <div className="Info_Wrap_2_1_1"><h4>아이디</h4></div>
                        <div className="Info_Wrap_2_1_2"><h4>이메일 변경</h4></div>
                        <div className="Info_Wrap_2_1_3"><h4>비밀번호 재설정</h4></div>
                        <div className="Info_Wrap_2_1_4">
                            <div><h4>콘텐츠 공개 설정</h4></div>
                            <div className="contentsOnOff">
                                <input type="checkbox" id="switch"></input>
                                <label for="switch" className="switch_label">
                                    <span className="onf_btn"></span>
                                </label></div>
                        </div>
                    </div>
                    <div className="Info_Wrap_2_2"><h4>계정 삭제하기</h4></div>
                </div>
            </div>
        </div>
    );
}

export default MyInformation;
