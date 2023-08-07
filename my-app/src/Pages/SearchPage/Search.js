import React from "react";
import styled from "styled-components";
import SearchHeader from "./SearchHeader";
import { useSelector } from "react-redux";

import PageLayout from "../CommunityPage/PageLayout";
import SearchConWrapper from "./SearchConWrapper";
import Menu from "./Menu";

const Search = () => {
  const TVShow = useSelector((state) => state.TVShowSearchReducer);
  console.log(Object.values(TVShow).filter((it) => it.backdrop_path));

  return (
    <>
      {/* <SearchHeader></SearchHeader> */}
      {/* <SearchUI placeholder="콘텐츠를 검색해보세요!"></SearchUI> */}
      <Menu menu1={{ eng: "contents", kor: "콘텐츠" }} menu2={{ eng: "user", kor: "유저" }}></Menu>
      <PageLayout>
        {JSON.stringify(TVShow) !== "{}" ? (
          <Div>
            {Object.values(TVShow)
              .filter((it) => it.backdrop_path)
              .map((it) => (
                <SearchConWrapper key={it.id} it={it}></SearchConWrapper>
              ))}
          </Div>
        ) : (
          <NoResult>
            <img src="/imgs/error.svg"></img>
            <span>검색결과가 없습니다.</span>
            <span>다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해보세요.</span>
          </NoResult>
        )}
      </PageLayout>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;

  > img {
    margin-bottom: 2rem;
  }

  > span:first-child {
    font-size: 25px;
    font-weight: 700;
    line-height: 32px;
  }

  > span:nth-child(2) {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
`;

export default Search;
