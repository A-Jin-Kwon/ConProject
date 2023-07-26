import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./Pages/HomePage/Home";
import RecordMain from "./Pages/ConRecordPage/RecordMain";
import Community from "./Pages/CommunityPage/Community";
import Setting from "./Pages/SettingPage/Setting";
import LoginEmail from "./Pages/LoginPage/LoginEmail";
import Join from "./Pages/JoinPage/Join";
import JoinEmail from "./Pages/JoinEmailPage/JoinEmail";
import MainLayout from "./Components/MainLayout/MainLayout";
import MyInformation from "./Pages/SettingPage/MyInformation";
import ProfileSetting from "./Pages/SettingPage/ProfileSetting";
import CommunityProfile from "./Pages/CommunityPage/Profile/CommunityProfile";
import SettingFollowing from "./Pages/SettingPage/SettingFollowing";
import SettingFollower from "./Pages/SettingPage/SettingFollower";
import Login from "./Pages/LoginPage/Login";
import Search from "./Pages/SearchPage/Search";
import RecordCon from "./Pages/ConRecordPage/RecordCon";

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
          </Route>

          {/* 헤더가 필요 없다면 이 안에 추가해주세요! */}
          <Route path="/login-email" element={<LoginEmail />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join-email" element={<JoinEmail />} />
          <Route path="/myInformation" element={<MyInformation />} />
          <Route path="/profileSetting" element={<ProfileSetting />} />
          <Route path="/communtiy/profile" element={<CommunityProfile />} />
          <Route path="/setting/following" element={<SettingFollowing />} />
          <Route path="/setting/follower" element={<SettingFollower />} />
          <Route path="/community/profile" element={<CommunityProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search></Search>} />
          <Route path="/record-con" element={<RecordCon />} />
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
