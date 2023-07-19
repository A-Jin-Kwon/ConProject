import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import HeaderStyled from "styled-components";
import { useState, useEffect } from "react";

const Header = () => {
  const curLocation = useLocation();
  useEffect(() => {
    const curPath = curLocation.pathname;

    if(curPath === '/'){
      setCurrentPage('home');
    }
    else if(curPath === '/conrecord'){
      setCurrentPage('conrecord');
    }
    else if(curPath === '/community'){
      setCurrentPage('community');
    }
    else if(curPath === '/setting'){
      setCurrentPage('setting');
    }
    else{
      setCurrentPage('');
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
        <div>
          <LinkWrapper className="" to={"/"} id="home" currentPage={currentPage}>홈</LinkWrapper>
          <LinkWrapper className="" to={"/conrecord"} id="conrecord" currentPage={currentPage}>콘 기록</LinkWrapper>
          <LinkWrapper className="" to={"/community"} id="community" currentPage={currentPage}>커뮤니티</LinkWrapper>
          <LinkWrapper className="" to={"/setting"} id="setting" currentPage={currentPage}>설정</LinkWrapper>
        </div>
        <ProfileWrapper>
          <HeaderRightDiv>
            <img src="imgs/search.png" />
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
`;
const MenuBar = HeaderStyled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20rem;
    margin-right: 20rem;
`;

const Link = ({ children, currentPage, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const LinkWrapper = HeaderStyled(Link)`
    text-decoration: none;
    
    // 현재 탭의 id와 state가 일치하면 노란색으로 색상을 바꾸어줍니다.
    color: ${(props) => (props.id === props.currentPage ? "#FFC000" : "#242424")};
    padding: 10px;
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
