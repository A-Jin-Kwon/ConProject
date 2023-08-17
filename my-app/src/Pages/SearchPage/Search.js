import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import PageLayout from "../CommunityPage/PageLayout";
import SearchConWrapper from "./SearchConWrapper";
import Menu from "./Menu";
import Modal from "../CommunityPage/Modal/CommunityModal";

//TMDB 사용
const baseURL = "https://api.themoviedb.org/3/search/";
const privateKey = "2d110def1aebc18d7c0afdc58440a8d7";
const baseLanguage = "ko";

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const InputValue = useSelector((state) => state.SearchInputReducer);
  const isModalClicked = useSelector((state) => state.communityReducer.isModalClicked);
  const [TVShow, setTVShow] = useState({});

  useEffect(() => {
    const getCon = async (queryString) => {
      const res = await axios(`${baseURL}multi?query=${queryString}&api_key=${privateKey}&language=${baseLanguage}`);
      setTVShow(res.data.results);
      // console.log(res.data.results);
    };
    getCon(InputValue.input);
    console.log(TVShow);
  }, [InputValue]);

  // 콘을 추가하시겠습니까에서 취소 했을 때 검색 결과 다시 로딩하는 위한 과정
  // 현재 주소의 queryString과 store에 있는 input을 비교해서 다르다면 store에 input을 업데이트 해준다.
  if (!isModalClicked && InputValue.input !== location.search.substring(location.search.indexOf("="))) dispatch({ type: "newInput", input: location.search.substring(location.search.indexOf("=")) });

  return (
    <>
      {isModalClicked && <Modal></Modal>}
      {/* <SearchUI placeholder="콘텐츠를 검색해보세요!"></SearchUI> */}
      <Menu menu1={{ eng: "contents", kor: "콘텐츠" }} menu2={{ eng: "user", kor: "유저" }}></Menu>
      <PageLayout>
        {JSON.stringify(TVShow) !== "[]" ? (
          <Div>
            {Object.values(TVShow)
              .filter((it) => it.poster_path)
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
