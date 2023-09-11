import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseServerURL } from "../../Components/StyledComponents/StyledComponents";

import Loading from "../../Components/StyledComponents/Loading";
// 아래 컨테이너는 나중에 다시 쓸거임..
import { StyledMuiContainer } from "../HomePage/MyHome";
import Grid from "@mui/material/Grid";

const Setting = () => {
  const dispatch = useDispatch();

  const [settingpage, setSettingPage] = useState("setting");
  const [username, setUserName] = useState("닉네임");
  const [introduction, setIntroduction] = useState("한 줄 소개");

  // 로그인 상태 확인
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  useEffect(() => {
    !isLoggedIn ? navigate("/login") : navigate("/setting");
  }, [isLoggedIn]);

  // 멤버 프로필 가져오기
  const [loading, setLoading] = useState(true);
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
        <StyledMuiContainer>
          <FlexBox>
            <ProfileImg />
            <AboutUser container>
              <AboutFollowWrapper item container xs={12}>
                <GridItem item xs={3}>
                  <AboutFollow>팔로워</AboutFollow>
                </GridItem>
                <GridItem item xs={3}>
                  <AboutFollow>팔로우</AboutFollow>
                </GridItem>
              </AboutFollowWrapper>
              <GridItem item xs={12} sx={{ mt: 4 }}>
                <UserName>{username}</UserName>
              </GridItem>
              <GridItem item xs={12} sx={{ mt: 6 }}>
                <Introduction>{introduction}</Introduction>
              </GridItem>
            </AboutUser>
          </FlexBox>
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
        </StyledMuiContainer>
      )}
    </>
  );
};
export default Setting;

const Pf_3 = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 172px; */
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
  margin: auto 10 auto auto;
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

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
`;

const Div = styled.div``;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 2rem;
  background-color: black;
  border-radius: 1px solid red;
  border-radius: 14px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 25.6px;
`;

const Introduction = styled.div`
  font-size: 14px;
  color: #464646;
  margin-top: 6px;
  /* width: 200px; */
`;

const AboutUser = styled(Grid)`
  /* margin: 0 0 0 auto; */
  /* max-width: 400px; */
  max-width: 70%;
  height: 76px;
  border-radius: 12px;
  /* background-color: #f2f2f2; */
`;

const AboutFollowWrapper = styled(Grid)`
  margin-bottom: 10rem;
`;
const AboutFollow = styled.div`
  margin-right: 40px;
`;

const GridItem = styled(Grid)``;
