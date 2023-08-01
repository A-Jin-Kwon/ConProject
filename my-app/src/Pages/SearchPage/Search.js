import React from "react";
import styled from "styled-components";
import SearchHeader from "./SearchHeader";
import { useSelector } from "react-redux";

import PageLayout from "../CommunityPage/PageLayout";
import SearchUI from "../../Components/StyledComponents/SearchUI";
import SearchConWrapper from "./SearchConWrapper";
import Menu from "./Menu";

const Search = () => {
  const TVShow = useSelector((state) => state.TVShowSearchReducer);
  console.log(TVShow);

  return (
    <>
      <SearchHeader></SearchHeader>
      <SearchUI placeholder="콘텐츠를 검색해보세요!"></SearchUI>
      <Menu menu1={{ eng: "contents", kor: "콘텐츠" }} menu2={{ eng: "user", kor: "유저" }}></Menu>
      <PageLayout>
        {JSON.stringify(TVShow) !== "{}" ? (
          <Div>
            {Object.values(TVShow)
              .filter((it) => it.show.image)
              .map((it) => (
                <SearchConWrapper key={it.show.id} it={it}></SearchConWrapper>
              ))}
          </Div>
        ) : (
          <NoResult>
            <span>검색결과가 없습니다.</span>
            <span>콘텐츠와 유저를 검색해주세요.</span>
          </NoResult>
        )}
      </PageLayout>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
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

  > span:first-child {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  > span:nth-child(2) {
    font-size: 20px;
    font-weight: 400;
  }
`;

export default Search;
