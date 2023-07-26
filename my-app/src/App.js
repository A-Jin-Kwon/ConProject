import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./Pages/HomePage/Home";
import ConRecord from "./Pages/ConRecordPage/ConRecord";
import Community from "./Pages/CommunityPage/Community";
import Setting from "./Pages/SettingPage/Setting";
import Login from "./Pages/LoginPage/Login";
import JoinEmail from "./Pages/JoinEmailPage/JoinEmail";
import MainLayout from "./Components/MainLayout/MainLayout";
import MyInformation from "./Pages/SettingPage/MyInformation";
import ProfileSetting from "./Pages/SettingPage/ProfileSetting";
import CommunityProfile from "./Pages/CommunityPage/Profile/CommunityProfile";
import SettingFollowing from "./Pages/SettingPage/SettingFollowing";
import SettingFollower from "./Pages/SettingPage/SettingFollower";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <div>
        <Routes>
          {/* 헤더가 필요한 페이지면 이 안에 추가해주세요! */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/conrecord" element={<ConRecord />} />
            <Route path="/community" element={<Community />} />
            <Route path="/setting" element={<Setting />} />
          </Route>

          {/* 헤더가 필요 없다면 이 안에 추가해주세요! */}
          <Route path="/login" element={<Login />} />
          <Route path="/join-email" element={<JoinEmail />} />
          <Route path="/myInformation" element={<MyInformation />} />
          <Route path="/profileSetting" element={<ProfileSetting />} />
          <Route path="/communtiy/profile" element={<CommunityProfile />} />
          <Route path="/setting/following" element={<SettingFollowing />} />
          <Route path="/setting/follower" element={<SettingFollower />} />
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
