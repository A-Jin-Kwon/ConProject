import { useState } from "react";
import React from "react";
import ProfileImg from "../../Components/StyledComponents/ProfileImg";
import Setting from "./Setting";
import NavigateHeader from "../../Components/Header/NavigateHeader";
import { styled } from "styled-components";


const SettingProfile = ()=>{

    const [settingpage, setSettingPage] = useState("myInformation");
    const clickHandler = (e) => {
        console.log(e.target.id);
        setSettingPage(e.target.id);
    };

   /*저장 버튼 누르면 새로운 객체에 저장, 콘솔 창에 내용 확인*/

    const [username, setUsername] = useState('');
    const [introduction, setIntrodction] = useState('');
    const [newObject, setNewObject] = useState(null);
    const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setIntrodction(event.target.value);

  

    /*글자 수 50자 초과시 경고 문*/

    setShowWarning(event.target.value.length >50);
  };
  const handleSaveClick = () => {
    const newObj = {
      username: username,
      introduction: introduction
    };
    setNewObject(newObj);
    console.log(newObj);
    alert(`<변경 내용>\n이름: ${username}\n자기소개: ${introduction}\n저장되었습니다!` )
  };

    return(
        <div>
            <NavigateHeader headerTitlte={"프로필 설정"}/>
              <div className="PS_Wrap">
                  {/* <div className="PS_Wrap_1"><ProfileButton></ProfileButton></div>  건희님 기존 코드 */}
                  {/* 프로필 이미지 변경 */}
                  <div className="PS_Wrap_1"><ProfileImg/></div>

                  <div className="PS_Wrap_2">
                      <div className="PS_Wrap_2_1"><h4>이름</h4></div>
                      <div className="PS_Wrap_2_2"><input className="PS_Wrap_2_2_Btn" type="text" name="username" placeholder="이름을 입력하세요" required 
                      value={username}
                      onChange={handleInputChange}></input></div>
                  </div>
                  <div className="PS_Wrap_3">
                      <div className="PS_Wrap_3_1"><h4>자기소개</h4></div>
                      <div className="PS_Wrap_3_2"><input className="PS_Wrap_3_2_Btn" type="text" name="introduction" placeholder="최대50자" required
                      value={introduction}
                      onChange={handleInputChange2}></input>
                      {showWarning && <h4 style={{ color: 'red' }}>글자 수가 50자를 초과했습니다!</h4>}</div>
                  </div>
                  <div className="PS_Wrap_4"><button className="PS_Wrap_4_Btn" onClick={handleSaveClick} style={{fontFamily:'NanumSquareNeo'}}><h3>변경사항 저장</h3></button></div>
              </div>

              <Setting username={username} introduction={introduction} />

        </div>

       );
}

export default SettingProfile;
