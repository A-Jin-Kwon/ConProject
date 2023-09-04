import React, { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";
import SearchModal from "./SearchModal";

// use mui
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Popper from "@mui/material/Popper";

import { StyledLink } from "../CommunityPage/FollowerContainer/Follower";
import EditNote from "../../Components/StyledComponents/EditNote";

const SearchConWrapper = ({ it }) => {
  const [optionClicked, setOptionClicked] = useState(false);
  const [mouseOverTitle, setMouseOverTitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const optionRef = useRef();

  // //option 1개만 띄우기
  // useEffect(() => {
  //   function handleOutside(e) {
  //     if (optionRef.current && !optionRef.current.contains(e.target)) {
  //       setOptionClicked(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutside);
  //   };
  // }, [optionRef]);

  // 제목 길때 마우스 hover하면 제목 다 나오게하는 코드
  const open = Boolean(anchorEl);

  const handleTitleMouseOver = (e) => {
    // console.log(e);
    setMouseOverTitle(e.target.innerText);
    setAnchorEl(e.target);
  };

  const handleTitleMouseOut = (e) => {
    setMouseOverTitle("");
    setAnchorEl(null);
  };
  // 여기까지

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ pt: 3 }}>
      <Paper sx={{ m: 1 }} elevation={0}>
        <Card elevation={0}>
          <Wrapper>
            <StyledLink to={`/searchDetail`} state={{ media_type: it.media_type, id: it.id }}>
              <StyledImg src={`https://image.tmdb.org/t/p/original${it.poster_path}`}></StyledImg>
              <ConInfoWrapper>
                <Div>
                  {it.media_type === "tv" ? (
                    <ConTitle onMouseOver={handleTitleMouseOver} onMouseOut={handleTitleMouseOut}>
                      {it.name}
                    </ConTitle>
                  ) : (
                    <ConTitle onMouseOver={handleTitleMouseOver} onMouseOut={handleTitleMouseOut}>
                      {it.title}
                    </ConTitle>
                  )}
                  <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
                    {mouseOverTitle}
                  </Popper>
                  <EditNote
                    ref={optionRef}
                    setOptionClicked={setOptionClicked}
                    content={it}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setOptionClicked(true);
                    //   console.log("asjdnkajndk");
                    // }}
                  ></EditNote>
                  {/* {optionClicked ? <SearchModal /> : <></>} */}
                </Div>
                {it.media_type === "tv" ? <ConCategory>드라마</ConCategory> : <ConCategory>영화</ConCategory>}
              </ConInfoWrapper>
            </StyledLink>
          </Wrapper>
        </Card>
      </Paper>
    </Grid>
  );
};

const Wrapper = styled.div`
  /* width: 280px; */
  height: 450px;
  /* box-sizing: border-box; */
  /* border-radius: 8px; */
  /* margin-bottom: 1rem; */
  /* margin-right: 15px; */
`;

const StyledImg = styled.img`
  width: 100%;
  height: 390px;
  border-radius: 8px;
`;

const ConInfoWrapper = styled.div`
  width: 100%;
  margin-top: 3px;
  position: relative;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Option = styled.div.attrs({
  className: "material-symbols-outlined",
})`
  font-weight: 300;
  cursor: pointer;
`;

const ConTitle = styled.div`
  width: 250px;
  height: 25px;
  font-weight: 700;
  font-size: 16px;
  color: #242424;
  /* 제목이 너무 길면 ...으로 나타내기 */
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ConCategory = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #464646;
  margin-top: 0.5rem;
`;

export { StyledImg, ConTitle };
export default SearchConWrapper;
