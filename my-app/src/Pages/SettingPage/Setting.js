import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import axios from "axios";
import { baseServerURL } from "../../Components/StyledComponents/StyledComponents";

import Loading from "../../Components/StyledComponents/Loading";
// import { useHandleLogout } from "../../Components/Logout";
// 아래 컨테이너는 나중에 다시 쓸거임..
import { StyledMuiContainer } from "../HomePage/MyHome";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [settingpage, setSettingPage] = useState("setting");
  const [username, setUserName] = useState("닉네임");
  const [introduction, setIntroduction] = useState("한 줄 소개");

  // 로그인 상태 확인
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  // 이 코드 수정 필요
  // useEffect(() => {
  //   !isLoggedIn ? navigate("/login") : navigate("/setting");
  // }, [isLoggedIn]);

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

    async function getFollowerList() {
      const res = await axios.get(baseServerURL + "/app/follow/following_list", {
        headers: { Authorization: auth },
      });
      console.log("followerList", res);
    }
    getUserInfo();
    getFollowerList();
  });

  const clickHandler = (e) => {
    console.log(e.target.id);
    setSettingPage(e.target.id);
  };

  // 이거 재사용하고 싶은데...
  const handleLogout = () => {
    localStorage.removeItem("authObj");
    localStorage.removeItem("auth");
    dispatch({ type: "logOut" });
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
          <List>
            {/* 첫번째 */}
            <ListItemTheme disablePadding>
              <ListItemButton>
                <ListItemText primary="기본설정" />
              </ListItemButton>
            </ListItemTheme>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/myInformation")}>
                <ListItemText primary="내 정보 관리" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/settingProfile")}>
                <ListItemText primary="프로필 설정" />
              </ListItemButton>
            </ListItem>
            <Divider />
            {/* 두번째 */}
            <ListItemTheme disablePadding>
              <ListItemButton>
                <ListItemText primary="고객센터" />
              </ListItemButton>
            </ListItemTheme>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/cornNotice")}>
                <ListItemText primary="공지사항" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/cornFAQ")}>
                <ListItemText primary="FAQ" />
              </ListItemButton>
            </ListItem>

            {/* 세번째 */}
            <ListItemTheme disablePadding>
              <ListItemButton>
                <ListItemText primary="정보" />
              </ListItemButton>
            </ListItemTheme>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="이용약관" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="개인정보 정책" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="오픈소스" />
              </ListItemButton>
            </ListItem>
            {/* 마지막 */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="버전" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemText primary="로그아웃" />
              </ListItemButton>
            </ListItem>
          </List>
        </StyledMuiContainer>
      )}
    </>
  );
};
export default Setting;

const ListItemTheme = styled(ListItem)`
  background-color: #e6e6e6;
  border-radius: 4px;
  color: #909090;
`;

const StyledListItem = styled(ListItem)`
  color: #242424;
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
