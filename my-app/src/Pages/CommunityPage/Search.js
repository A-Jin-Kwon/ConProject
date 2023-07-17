import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <SearchBox>
      <Form>
        <SearchIcon>search</SearchIcon>
        <Input placeholder="유저를 검색해보세요!"></Input>
      </Form>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 780px;
  height: 50px;
  margin: 1rem auto 1rem auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 10px 2px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e8e8e8;
  border-radius: 12px;
  box-sizing: border-box;
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
  background-color: #e8e8e8;
  border-radius: 12px;
  border: none;
  padding: 0;
  outline: none;
`;

export default Search;
