import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

import { ConTitle } from "../../SearchPage/SearchConWrapper";

//TMDB 사용
const baseURL = "https://api.themoviedb.org/3/search/";
const privateKey = "2d110def1aebc18d7c0afdc58440a8d7";
const baseLanguage = "ko";

const AlarmSearch = ({ anchorEl }) => {
  // const InputValue = useSelector((state) => state.SearchInputReducer);
  const InputValue = useSelector((state) => state.communityReducer.input);
  const [TVShow, setTVShow] = useState({});

  console.log(InputValue);

  useEffect(() => {
    const getCon = async (queryString) => {
      const res = await axios(`${baseURL}multi?query=${queryString}&api_key=${privateKey}&language=${baseLanguage}`);
      setTVShow(res.data.results);
      // console.log(res.data.results);
    };
    console.log("home input : ", InputValue);
    getCon(InputValue);
    console.log(TVShow);
  }, [InputValue]);

  // 개봉, 방송 날짜에서 연도만 뽑기
  const dateFormating = (date) => {
    const dateParts = date.split("-");
    const year = dateParts[0];
    return year;
  };

  return (
    <StyledPopper open={true} anchorEl={anchorEl}>
      <Box sx={{ borderRadius: 2, bgcolor: "background.paper" }}>
        {" "}
        {JSON.stringify(TVShow) !== "[]" ? (
          <div>
            {Object.values(TVShow)
              .filter((it) => it.poster_path)
              .map((it) => (
                <FlexDiv>
                  <StyledImg src={`https://image.tmdb.org/t/p/original${it.poster_path}`}></StyledImg>
                  <ContentInfo>
                    {it.media_type === "tv" ? <ConTitle>{it.name}</ConTitle> : <ConTitle>{it.title}</ConTitle>}
                    {it.media_type === "tv" ? <ContentDate>{dateFormating(it.first_air_date)}</ContentDate> : <ContentDate>{dateFormating(it.release_date)}</ContentDate>}
                  </ContentInfo>
                </FlexDiv>
                // <SearchConWrapper key={it.id} it={it}></SearchConWrapper>
              ))}
          </div>
        ) : (
          <>nores</>
          // <NoResult>
          //   <img src="/imgs/error.svg"></img>
          //   <span>검색결과가 없습니다.</span>
          //   <span>다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해보세요.</span>
          // </NoResult>
        )}
      </Box>
    </StyledPopper>
  );
};

const StyledPopper = styled(Popper)`
  width: 420px;
  z-index: 10000;
`;

const StyledImg = styled.img`
  width: 60px;
  height: 80px;
`;
const FlexDiv = styled.div`
  display: flex;
  margin: 5px;
  &:hover {
    background-color: #fff1c6;
    cursor: pointer;
  }
`;

const ContentInfo = styled.div`
  margin-left: 10px;
`;

const ContentDate = styled.div`
  margin-top: 1rem;
`;
export default AlarmSearch;
