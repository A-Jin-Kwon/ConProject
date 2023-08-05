import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import HeaderStyled, { css } from "styled-components";
import { useState, useEffect } from "react";
import SearchBar from "../StyledComponents/SearchBar";

const Header = () => {
  const curLocation = useLocation();
  useEffect(() => {
    const curPath = curLocation.pathname;

    if (curPath === "/") {
      setCurrentPage("home");
    } else if (curPath === "/conrecord") {
      setCurrentPage("conrecord");
    } else if (curPath === "/community") {
      setCurrentPage("community");
    } else if (curPath === "/setting") {
      setCurrentPage("setting");
    } else {
      setCurrentPage("");
    }
  }, [curLocation]);

  // 현재 속해 있는 탭 id를 저장합니다.
  // 하단의 스타일에 있는 LinkWrapper의 color와 관련되어있습니다.
  const [currentPage, setCurrentPage] = useState("home");
  // const clickHandler = (e) => {
  //   console.log(e.target.id);
  //   setCurrentPage(e.target.id);
  // };

  return (
    <HeaderWrapper>
      <MenuBar>
        <MenuLeftContainer>
          <Link to={"/"}>
            <img height="38px" src="imgs/Con_main_logo.svg"></img>
          </Link>
          <MenuLinksWrapper>
            <LinkWrapper className="" to={"/"} id="home" currentPage={currentPage}>
              홈
            </LinkWrapper>
            <LinkWrapper className="" to={"/conrecord"} id="conrecord" currentPage={currentPage}>
              콘 기록
            </LinkWrapper>
            <LinkWrapper className="" to={"/community"} id="community" currentPage={currentPage}>
              커뮤니티
            </LinkWrapper>
            <LinkWrapper className="" to={"/setting"} id="setting" currentPage={currentPage}>
              설정
            </LinkWrapper>
          </MenuLinksWrapper>
        </MenuLeftContainer>
        <ProfileWrapper>
          <HeaderRightDiv>
            <SearchBar placeholder={"콘텐츠, 유저를 검색해보세요!"}></SearchBar>
          </HeaderRightDiv>
          <HeaderRightDiv>
            {/* 임시 프로필입니다 */}
            <img src="imgs/Rectangle112.png" />
          </HeaderRightDiv>
          <HeaderRightDiv>
            <LineImg src="imgs/Line12.png" />
          </HeaderRightDiv>
          <HeaderRightDiv>
            {/* 임시 로그인,로그아웃 버튼입니다 */}
            <img src="imgs/Frame36.png" />
          </HeaderRightDiv>
        </ProfileWrapper>
      </MenuBar>
    </HeaderWrapper>
  );
};

export default Header;

/** 스타일 */
const HeaderWrapper = HeaderStyled.div`
    border-bottom: 1px solid #E8E8E8;
    background-color:white;
    position:fixed;
    width:100%;
    height:70px;
    z-index:4;
`;
const MenuBar = HeaderStyled.div`
    max-width:1180px;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto 0 auto;
`;

const Link = ({ children, currentPage, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const MenuLeftContainer = HeaderStyled.div`
  display:flex;
  height:100%;
  width:538px;
  justify-content:space-between;
  align-items:center;
`;

const MenuLinksWrapper = HeaderStyled.div`
  display:flex;
  justify-content:space-between;
  height:100%;
  width:390px;

  > img{
    margin-right:10px;
  }
`;

const LinkWrapper = HeaderStyled(Link)`
    box-sizing:border-box;
    border-radius:8px;
    text-decoration: none;
    width:90px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: 0.5s;
    
    // 현재 탭의 id와 state가 일치하면 노란색으로 색상을 바꾸어줍니다.
    ${(props) =>
      props.id === props.currentPage
        ? css`
            color: #ffc000;
            cursor: default;
          `
        : css`
            color: #242424;
            cursor: pointer;
            &:hover {
              color: #909090;
            }
          `}
`;

const ProfileWrapper = HeaderStyled.div`
    display: flex;
    align-items: center;
`;
const HeaderRightDiv = HeaderStyled.div`
    padding: 10px;
    display: flex;
    cursor: pointer;
`;
const LineImg = HeaderStyled.img`
    width: 1px;
    color: #E8E8E8;
`;
