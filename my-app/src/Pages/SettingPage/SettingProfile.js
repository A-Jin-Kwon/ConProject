import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileImg from "../../Components/StyledComponents/ProfileImg";
import NavigateHeader from "../../Components/Header/NavigateHeader";
import { styled } from "styled-components";
import axios from "axios";
import { baseServerURL } from "../../Components/StyledComponents/StyledComponents";
import { useNavigate } from "react-router-dom";

const SettingProfile = () => {
  const userInfo = useSelector((state) => state.SettingReducer);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [introduction, setIntrodction] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setUsername(userInfo.name);
    setIntrodction(userInfo.introduction);
  }, [userInfo]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setIntrodction(event.target.value);

    /*글자 수 50자 초과시 경고 문*/
    setShowWarning(event.target.value.length > 50);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = localStorage.getItem("auth");
    const formData = new FormData();
    formData.append("name", username);
    formData.append("introduction", introduction);
    // 프로필 사진은 나중에...
    // formData.append("imageFile", null);
    async function postProfileChanged() {
      const res = await axios.post(baseServerURL + "/members/profile", formData, { headers: { Authorization: auth } });
      return res;
    }

    try {
      const res = await postProfileChanged();
      console.log(res);

      if (res.data.code === 200) navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavigateHeader headerTitlte={"프로필 설정"} />
      <form onSubmit={handleSubmit}>
        <div className="PS_Wrap">
          {/* <div className="PS_Wrap_1"><ProfileButton></ProfileButton></div>  건희님 기존 코드 */}
          {/* 프로필 이미지 변경 */}
          <div className="PS_Wrap_1">
            <ProfileImg />
          </div>

          <div className="PS_Wrap_2">
            <div className="PS_Wrap_2_1">
              <h4>이름</h4>
            </div>
            <div className="PS_Wrap_2_2">
              <input className="PS_Wrap_2_2_Btn" type="text" name="username" placeholder="이름을 입력하세요" required value={username} onChange={handleInputChange}></input>
            </div>
          </div>
          <div className="PS_Wrap_3">
            <div className="PS_Wrap_3_1">
              <h4>자기소개</h4>
            </div>
            <div className="PS_Wrap_3_2">
              <input className="PS_Wrap_3_2_Btn" type="text" name="introduction" placeholder="최대50자" required value={introduction} onChange={handleInputChange2}></input>
              {showWarning && <h4 style={{ color: "red" }}>글자 수가 50자를 초과했습니다!</h4>}
            </div>
          </div>
          <div className="PS_Wrap_4">
            <button className="PS_Wrap_4_Btn">변경사항 저장</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingProfile;
