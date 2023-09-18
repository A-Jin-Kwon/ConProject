import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

import { ConTitle } from "../../SearchPage/SearchConWrapper";

//TMDB 사용
const baseURL = "https://api.themoviedb.org/3/search/";
const privateKey = "2d110def1aebc18d7c0afdc58440a8d7";
const baseLanguage = "ko";

const AlarmSearch = ({ anchorEl }) => {
  const dispatch = useDispatch();
  const InputValue = useSelector((state) => state.communityReducer.input);
  const [TVShow, setTVShow] = useState({});
  const [selectedCon, setSelectedCon] = useState("");
  const [selectedConId, setSelectedConId] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const getCon = async (queryString) => {
      const res = await axios(`${baseURL}multi?query=${queryString}&api_key=${privateKey}&language=${baseLanguage}`);
      setTVShow(res.data.results);
      console.log("home input : ", InputValue);
    };
    let searchTimerIndentifier = setTimeout(() => {
      getCon(InputValue);
    }, [700]);

    return () => {
      clearTimeout(searchTimerIndentifier);
    };
  }, [InputValue]);

  useEffect(() => {
    dispatch({ type: "setSelectedConTitle", selectedConTitle: selectedCon, selectedConId: selectedConId });
    if (selectedCon !== "") setOpen(false);
    else setOpen(true);
  }, [selectedCon]);

  // 개봉, 방송 날짜에서 연도만 뽑기
  const dateFormating = (date) => {
    const dateParts = date.split("-");
    const year = dateParts[0];
    return year;
  };

  const handleConSelect = (it) => {
    console.log(it);
    setSelectedConId(it.id);
    it.media_type === "tv" ? setSelectedCon(it.name) : setSelectedCon(it.title);
  };

  return (
    <StyledPopper open={open} anchorEl={anchorEl}>
      <Box sx={{ borderRadius: 2, bgcolor: "background.paper" }}>
        {" "}
        {JSON.stringify(TVShow) !== "[]" ? (
          <div>
            {Object.values(TVShow)
              .filter((it) => it.poster_path)
              .map((it) => (
                <FlexDiv
                  key={it.id}
                  onClick={() => {
                    handleConSelect(it);
                    // it.media_type === "tv" ? {setSelectedCon(it.name) setSelectedConId(it.id)} : setSelectedCon(it.title);
                  }}
                >
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
          <NoResults>
            {/* <img src="/imgs/error.svg"></img> */}
            <NoResult>검색결과가 없습니다.</NoResult>
            <div>다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해보세요.</div>
          </NoResults>
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
  z-index: 100;
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

const NoResults = styled.div`
  background-color: hsla(0, 0%, 82%, 0.3);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  font-size: 16px;
`;

const NoResult = styled.div`
  display: flex;
  justify-content: center;
`;
export default AlarmSearch;
