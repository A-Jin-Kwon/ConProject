import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// (구) 메뉴 현재는 사용하지 않는 메뉴창입니다.
const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState("total");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "changeMenu", menu: currentMenu });
  }, [currentMenu]);

  return (
    <>
      <ButtonContainer>
        <StyledButton name="total" onClick={(e) => setCurrentMenu(e.target.name)} isActive={currentMenu === "total"}>
          전체
        </StyledButton>
        <StyledButton name="movie" onClick={(e) => setCurrentMenu(e.target.name)} isActive={currentMenu === "movie"}>
          영화
        </StyledButton>
        <StyledButton name="drama" onClick={(e) => setCurrentMenu(e.target.name)} isActive={currentMenu === "drama"}>
          드라마
        </StyledButton>
        <StyledButton name="entertainment" onClick={(e) => setCurrentMenu(e.target.name)} isActive={currentMenu === "entertainment"}>
          예능
        </StyledButton>
        <StyledButton name="youtube" onClick={(e) => setCurrentMenu(e.target.name)} isActive={currentMenu === "youtube"}>
          유튜브
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  margin: auto 0 auto auto;
`;

const Button = ({ children, isActive, isFollowed, ...props }) => {
  return <button {...props}>{children}</button>;
};

const StyledButton = styled(Button)`
  height: 34px;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 4px 20px 4px 20px;
  background-color: ${(props) => (props.isActive ? "#FFC000" : "#ffffff")};
  border: 1px solid #e6e6e6;
  margin: 3px;
`;

export { Button };
export default Menu;
