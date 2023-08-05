import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

//TMDB 사용
const baseURL = "https://api.themoviedb.org/3/search/";
const privateKey = "2d110def1aebc18d7c0afdc58440a8d7";
const baseLanguage = "ko";

const SearchBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchRef = useRef();

  // 검색 기능
  useEffect(() => {
    const getCon = async (queryString) => {
      const res = await axios(`${baseURL}movie?query=${queryString}&api_key=${privateKey}&language=${baseLanguage}`);
      dispatch({ type: "loadTVShow", tvShow: res.data.results });
      console.log(res.data.results);
      return res.data.results;
    };
    if (isSearchBarClicked) {
      navigate(`/search`);
      // navigate(`/search?q=${queryString}`);
    }
    getCon(inputValue);
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

  // useEffect(() => {
  //   if (pathname !== "/search") {
  //     setIsSearchBarClicked(false);
  //     setInputValue("");
  //   }
  // }, [pathname]);

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
