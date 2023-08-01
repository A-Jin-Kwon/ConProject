import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// 뷰포트 크기 감지와 이에 따른 요소 재배치 구현 안 되어 있음
const Menu = ({ menu1, menu2 }) => {
  const [currentMenu, setCurrentMenu] = useState(`${menu1.eng}`);
  const [xpos, setXpos] = useState();
  const [ypos, setYpos] = useState();
  const contentBtn = useRef();
  const userBtn = useRef();

  const locateUnderLine = () => {
    if (currentMenu === `${menu1.eng}`) {
      setXpos(contentBtn.current.offsetLeft);
      setYpos(contentBtn.current.offsetTop + contentBtn.current.offsetHeight);
    } else {
      setXpos(userBtn.current.offsetLeft);
    }
  };

  const handleResizeEvent = () => {
    locateUnderLine();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeEvent);
    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []);

  useEffect(() => {
    locateUnderLine();
  }, [currentMenu]);

  return (
    <MenuContainer>
      <UnderLine left={xpos} top={ypos} />
      <MenuWrapper>
        <StyledBtn name={`${menu1.eng}`} ref={contentBtn} onClick={(e) => setCurrentMenu(e.target.name)}>
          {menu1.kor}
        </StyledBtn>
        <StyledBtn name={`${menu2.eng}`} ref={userBtn} onClick={(e) => setCurrentMenu(e.target.name)}>
          {menu2.kor}
        </StyledBtn>
      </MenuWrapper>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
  margin-top: 1em;
`;

const MenuWrapper = styled.div`
  display: flex;
  max-width: 1180px;
  margin: 0 auto 0 auto;
`;

const StyledBtn = styled.button`
  border: 0;
  background-color: white;
  box-sizing: border-box;
  color: #242424;
  padding: 0.5rem;
  font-size: 16px;
  width: 100px;
  text-align: center;
`;

const UnderLine = styled.div`
  width: 100px;
  background-color: #ffc000;
  height: 3px;
  position: absolute;
  left: ${(props) => props.left + "px"};
  top: ${(props) => props.top + "px"};
  transition: 0.5s;
`;
export default Menu;
