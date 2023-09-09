import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import axios from "axios";
import { baseServerURL } from "../../Components/StyledComponents/StyledComponents";

import Loading from "../../Components/StyledComponents/Loading";
// 아래 컨테이너는 나중에 다시 쓸거임..
import { StyledMuiContainer } from "../HomePage/MyHome";

const Setting = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [settingpage, setSettingPage] = useState("setting");
  const [username, setUserName] = useState("닉네임");
  const [introduction, setIntroduction] = useState("한 줄 소개");

  // 멤버 프로필 가져오기
  useEffect(() => {
    const auth = localStorage.getItem("auth");

    // 멤버 프로필 가져오는 함수
    async function getUserInfo() {
      const res = await axios.get(baseServerURL + "/members/profile", {
        headers: { Authorization: auth },
      });
      const memberInfo = res.data.result;
      setUserName(memberInfo.name);
      {
        memberInfo.introduction !== "자기소개를 입력하세요!" ? setIntroduction(memberInfo.introduction) : setIntroduction("");
      }
      dispatch({ type: "Multiple_setInfo", info: memberInfo });
      console.log(res);
      setLoading(false);
    }
    getUserInfo();
  });

  const clickHandler = (e) => {
    console.log(e.target.id);
    setSettingPage(e.target.id);
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        // <StyledMuiContainer>
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
                <Pf_3_1_1 style={{ paddingLeft: "30px", height: "20px", marginTop: "20px" }}>10</Pf_3_1_1>
                <Link to="/setting/following" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                  <Pf_3_1_1 style={{ height: "20px", paddingLeft: "20px", cursor: "pointer" }}>팔로잉</Pf_3_1_1>
                </Link>
              </Pf_3_1>
              <Pf_3_2>
                <Pf_3_1_2 style={{ paddingLeft: "30px", height: "20px", marginTop: "20px" }}>5</Pf_3_1_2>
                <Link to="/setting/follower" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                  <Pf_3_1_2 style={{ height: "20px", paddingLeft: "16px", cursor: "pointer" }}>팔로워</Pf_3_1_2>
                </Link>
              </Pf_3_2>
            </Pf_3>
          </div>
          <div className="SelectMenu">
            <div className="SM_1">
              <div className="SM_1_1">
                <h4>기본 설정</h4>
              </div>
              <Link to="/myInformation" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                <div className="SM_1_2" to={"/myInformation"} id="myInformation" onClick={clickHandler} settingpage={settingpage}>
                  <h4>내 정보 관리</h4>
                </div>
              </Link>
              <Link to="/settingProfile" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                <div className="SM_1_3" to={"/profileSetting"} id="profileSetting" onClick={clickHandler} settingpage={settingpage}>
                  <h4>프로필 설정</h4>
                </div>
              </Link>
            </div>
            <div className="SM_2">
              <div className="SM_2_1">
                <h4>고객센터</h4>
              </div>
              <Link to="/cornNotice" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                <div className="SM_1_2" to={"/cornNotice"} id="cornNotice" onClick={clickHandler} settingpage={settingpage}>
                  <h4>공지사항</h4>
                </div>
              </Link>
              <Link to="/cornFAQ" style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                <div className="SM_1_2" to={"/cornFAQ"} id="cornFAQ" onClick={clickHandler} settingpage={settingpage}>
                  <h4>FAQ</h4>
                </div>
              </Link>
            </div>
            <div className="SM_3">
              <div className="SM_3_1">
                <h4>정보</h4>
              </div>
              <div className="SM_3_2">
                <h4>이용약관</h4>
              </div>
              <div className="SM_3_3">
                <h4>개인정보 정책</h4>
              </div>
              <div className="SM_3_4">
                <h4>오픈소스</h4>
              </div>
              <div className="SM_3_5">
                <h4>버전</h4>
              </div>
              <div className="SM_3_6">
                <h4>로그아웃</h4>
              </div>
            </div>
          </div>
        </div>
        // </StyledMuiContainer>
      )}
    </>
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
`;
const Pf_3_1 = styled.div`
  border-right: 1px solid rgba(230, 230, 230, 1);
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;
const Pf_3_2 = styled.div`
  width: 50%;
  height: 100%;
`;
const Pf_3_1_1 = styled.div`
  width: 100%;
  height: 50%;
`;
const Pf_3_1_2 = styled.div`
  width: 100%;
  height: 50%;
`;
