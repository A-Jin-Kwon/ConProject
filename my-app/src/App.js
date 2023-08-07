import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./Pages/HomePage/Home";
import RecordMain from "./Pages/ConRecordPage/RecordMain";
import Community from "./Pages/CommunityPage/Community";
import Setting from "./Pages/SettingPage/Setting";
import Login from "./Pages/LoginPage/Login";
import LoginEmail from "./Pages/LoginPage/LoginEmail";
import LoginNaverCallback from "./Pages/LoginPage/LoginNaverCallback";
import PasswordFind from "./Pages/LoginPage/PasswordFind";
import Join from "./Pages/JoinPage/Join";
import JoinEmail from "./Pages/JoinEmailPage/JoinEmail";
import JoinCheck from "./Pages/JoinPage/JoinCheck";
import JoinRuleConUse from "./Pages/JoinPage/JoinRuleConUse";
import JoinRulePrivacy from "./Pages/JoinPage/JoinRulePrivacy";
import MainLayout from "./Components/MainLayout/MainLayout";
import MyInformation from "./Pages/SettingPage/MyInformation";
import ProfileSetting from "./Pages/SettingPage/ProfileSetting";
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
// import ConRecordPage from "./Pages/ConRecordPage/ConMenu/ConRecordPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <div>
        <Routes>
          {/* 헤더가 필요한 페이지면 이 안에 추가해주세요! */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/conrecord" element={<RecordMain />} />
            <Route path="/community" element={<Community />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/search" element={<Search></Search>} />
            <Route
              path="/searchDetail"
              element={<SearchDetail></SearchDetail>}
            />
          </Route>

          {/* 헤더가 필요 없다면 이 안에 추가해주세요! */}
          <Route path="/login" element={<Login />} />
          <Route path="/login-email" element={<LoginEmail />} />
          <Route path="/loginNaver-Callback" element={<LoginNaverCallback />} />
          <Route path="/password-find" element={<PasswordFind />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join-email" element={<JoinEmail />} />
          <Route path="/join-check" element={<JoinCheck />} />
          <Route path="/joinRule-conUse" element={<JoinRuleConUse />} />
          <Route path="/joinRule-privacy" element={<JoinRulePrivacy />} />
          <Route path="/myInformation" element={<MyInformation />} />
          <Route path="/profileSetting" element={<ProfileSetting />} />
          <Route path="/communtiy/profile" element={<CommunityProfile />} />
          <Route path="/setting/following" element={<SettingFollowing />} />
          <Route path="/setting/follower" element={<SettingFollower />} />
          <Route path="/community/profile" element={<CommunityProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/search" element={<Search></Search>} />
          <Route path="/record-con" element={<RecordCon />} />
          <Route path="/cornNotice" element={<CornNotice />} />
          <Route path="/cornFAQ" element={<CornFAQ />}></Route>
          <Route path="/share-con" element={<ShareCon />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'NanumSquareNeo';
  }`;

export default App;
