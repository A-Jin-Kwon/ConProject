import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SearchModal from "./SearchModal";

import { StyledLink } from "../CommunityPage/FollowerContainer/Follower";

const SearchConWrapper = ({ it }) => {
  const [optionClicked, setOptionClicked] = useState(false);
  const optionRef = useRef();

  //option 1개만 띄우기
  useEffect(() => {
    function handleOutside(e) {
      if (optionRef.current && !optionRef.current.contains(e.target)) {
        setOptionClicked(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [optionRef]);

  return (
    <Wrapper>
      <StyledLink to={`/searchDetail`} state={{ media_type: it.media_type, id: it.id }}>
        <StyledImg src={`https://image.tmdb.org/t/p/original${it.poster_path}`}></StyledImg>
        <ConInfoWrapper>
          <Div>
            {it.media_type === "tv" ? <ConTitle>{it.name}</ConTitle> : <ConTitle>{it.title}</ConTitle>}
            <Option ref={optionRef} onClick={() => setOptionClicked((state) => !state)}>
              more_vert
            </Option>
            {optionClicked ? <SearchModal /> : <></>}
          </Div>
          {it.media_type === "tv" ? <ConCategory>드라마</ConCategory> : <ConCategory>영화</ConCategory>}
        </ConInfoWrapper>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  height: 450px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-right: 15px;
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
  font-weight: 700;
  font-size: 16px;
  color: #242424;
  text-align: center;
`;

const ConCategory = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #464646;
  margin-top: 0.5rem;
`;

export { StyledImg };
export default SearchConWrapper;
