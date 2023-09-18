import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import MyHome from "./Pages/HomePage/MyHome";
import RecordMain from "./Pages/ConRecordPage/RecordMain";
import Community from "./Pages/CommunityPage/Community";
import Setting from "./Pages/SettingPage/Setting";
import Login from "./Pages/LoginPage/Login";
import LoginEmail from "./Pages/LoginPage/LoginEmail";
import LoginNaverCallback from "./Pages/LoginPage/LoginNaverCallback";
import PasswordFind from "./Pages/LoginPage/PasswordFind";
import Join from "./Pages/JoinPage/Join";
import JoinCheck from "./Pages/JoinPage/JoinCheck";
import JoinEmail from "./Pages/JoinPage/JoinEmail";
import ProfileSetting from "./Pages/JoinPage/ProfileSetting";
import JoinRuleConUse from "./Pages/JoinPage/JoinRuleConUse";
import JoinRulePrivacy from "./Pages/JoinPage/JoinRulePrivacy";
import MainLayout from "./Components/MainLayout/MainLayout";
import MyInformation from "./Pages/SettingPage/MyInformation";
import SettingProfile from "./Pages/SettingPage/SettingProfile";
import CommunityProfile from "./Pages/CommunityPage/Profile/CommunityProfile";
import PasswordReset from "./Pages/SettingPage/PasswordReset";
import SettingFollowing from "./Pages/SettingPage/SettingFollowing";
import SettingFollower from "./Pages/SettingPage/SettingFollower";
import Search from "./Pages/SearchPage/Search";
import RecordCon from "./Pages/ConRecordPage/RecordCon";
import CornNotice from "./Pages/SettingPage/CornNotice";
import CornFAQ from "./Pages/SettingPage/CornFAQ";
import SearchDetail from "./Pages/SearchPage/SearchDetail";
import ShareCon from "./Pages/ConRecordPage/ShareCon/ShareCon";
import ConDetailPage from "./Pages/ConRecordPage/ConDetailPage/ConDetailPage";
// import ConRecordPage from "./Pages/ConRecordPage/ConMenu/ConRecordPage";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  const checkLogin = () => {
    const authObjStr = localStorage.getItem("authObj");

    if (!authObjStr) {
      dispatch({ type: "logOut" });
    } else {
      const authObj = JSON.parse(authObjStr);
      // access token이 만료상태면 삭제
      if (Date.now() > authObj.expire) {
        console.log("expired auth");
        localStorage.removeItem("authObj");
        localStorage.removeItem("auth");
        dispatch({ type: "logOut" });
      } else {
        dispatch({ type: "login" });
        localStorage.setItem("auth", authObj.auth);
      }
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <div>
        <Routes>
          {/* 헤더가 필요한 페이지면 이 안에 추가해주세요! */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<MyHome />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/conrecord" element={<RecordMain />} />
            <Route path="/community" element={<Community />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/search" element={<Search />} />
            <Route path="/searchDetail" element={<SearchDetail></SearchDetail>} />
          </Route>

          {/* 헤더가 필요 없다면 이 안에 추가해주세요! */}
          <Route path="/login" element={<Login />} />
          <Route path="/login-email" element={<LoginEmail />} />
          <Route path="/loginNaver-Callback" element={<LoginNaverCallback />} />
          <Route path="/password-find" element={<PasswordFind />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join-check" element={<JoinCheck />} />
          <Route path="/join-email" element={<JoinEmail />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/joinRule-conUse" element={<JoinRuleConUse />} />
          <Route path="/joinRule-privacy" element={<JoinRulePrivacy />} />
          <Route path="/myInformation" element={<MyInformation />} />
          <Route path="/settingProfile" element={<SettingProfile />} />
          <Route path="/communtiy/profile" element={<CommunityProfile />} />
          <Route path="/setting/following" element={<SettingFollowing />} />
          <Route path="/setting/follower" element={<SettingFollower />} />
          <Route path="/community/profile" element={<CommunityProfile />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/search" element={<Search></Search>} />
          <Route path="/record-con" element={<RecordCon />} />
          <Route path="/cornNotice" element={<CornNotice />} />
          <Route path="/cornFAQ" element={<CornFAQ />}></Route>
          <Route path="/share-con" element={<ShareCon />} />
          <Route path="/conrecord/:id" element={<ConDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    @font-face: {
      font-family: 'NanumSquareNeo';  
      unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF;
    }
    @font-face: {
      font-family: "Montserrat";
      unicode-range: U+0030-0039,U+0041-005A,U+0061-007A
    }
    font-family: 'NanumSquareNeo', "Montserrat";
  }`;

export default App;
