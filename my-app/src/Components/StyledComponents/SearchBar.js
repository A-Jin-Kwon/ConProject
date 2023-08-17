import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchRef = useRef();

  // 검색 기능은 SearchPage/search.js로 이관

  useEffect(() => {
    dispatch({ type: "newInput", input: inputValue });
    if (isSearchBarClicked) {
      navigate(`/search`);
      navigate(`/search?q=${inputValue}`);
    }
    // getCon(inputValue);
    if (inputValue === "" && isSearchBarClicked) navigate("/");
  }, [inputValue]);

  //검색창 이외부분 클릭시 검색창 없애기
  useEffect(() => {
    function handleOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target) && pathname !== "/search") {
        setIsSearchBarClicked(false);
        setInputValue("");
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  });

  return (
    <SearchBarWrapper $isSearchBarClicked={isSearchBarClicked} ref={searchRef}>
      <Form>
        <SearchIcon
          onClick={() => {
            setIsSearchBarClicked(!isSearchBarClicked);
          }}
        >
          search
        </SearchIcon>
        <Input
          placeholder={placeholder}
          onInput={(e) => {
            setInputValue(e.target.value);
            // console.log(inputValue);
            // if (e.target.value !== "") navigate(`/search?q=`);
          }}
          value={inputValue}
        ></Input>
        <CancleIcon onClick={() => setInputValue("")}>cancel</CancleIcon>
      </Form>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  box-sizing: border-box;
  ${(props) =>
    props.$isSearchBarClicked
      ? css`
          width: 440px;
          border: 1px solid #ffc000;
        `
      : css`
          width: 40px;
        `}
  height: 46px;
  border-radius: 8px;
  transition: all 0.5s;

  &:focus-within {
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  &:focus {
    background-color: white;
  }
`;

const SearchIcon = styled.div.attrs({
  className: "material-symbols-outlined",
})`
  margin: 0 1rem 0 1rem;
  color: #909090;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: inherit;
  border: none;
  padding: 0;
  outline: none;
`;

const CancleIcon = styled.div.attrs({
  className: "material-symbols-outlined",
})`
  margin: 0 1rem 0 1rem;
  color: #909090;
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
`;

export default SearchBar;
