import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// 아래와 같이 사용하시면 됩니다!
// <Search placeholder="유저를 검색해보세요!"></Search>

// const getTVShow = async (queryString) => {
//   const res = await axios(`https://api.tvmaze.com/search/shows?q=${queryString}`);
//   // console.log(...res.data);
//   return res.data;
// };

const SearchUI = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getTVShow = async (queryString) => {
      const res = await axios(`https://api.tvmaze.com/search/shows?q=${queryString}`);
      dispatch({ type: "loadTVShow", tvShow: res.data });
      console.log(res.data);
      return res.data;
    };
    getTVShow(inputValue);
  }, [inputValue]);

  return (
    <SearchBox>
      <Form>
        <SearchIcon>search</SearchIcon>
        <Input placeholder={placeholder} onInput={(e) => setInputValue(e.target.value)}></Input>
      </Form>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 780px;
  height: 50px;
  margin: 1rem auto 1rem auto;
  border-radius: 12px;
  background-color: #e8e8e8;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  /* &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 10px 2px;
  } */
  &:focus-within {
    background-color: white;
    border: 1px solid #ffc000;
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

export default SearchUI;
