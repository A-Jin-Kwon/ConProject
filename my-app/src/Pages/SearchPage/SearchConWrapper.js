import React, { useState } from "react";
import styled from "styled-components";
import SearchModal from "./SearchModal";

const SearchConWrapper = ({ it }) => {
  const [optionClicked, setOptionClicked] = useState(false);

  return (
    <Wrapper>
      <StyledImg src={it.show.image.medium}></StyledImg>
      <ConInfoWrapper>
        <Div>
          <ConTitle>{it.show.name}</ConTitle>
          <Option onClick={() => setOptionClicked((state) => !state)}>more_vert</Option>
          {optionClicked ? <SearchModal /> : <></>}
        </Div>
        <ConCategory>{it.show.genres[0]}</ConCategory>
      </ConInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  height: 450px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 1rem;
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
export default SearchConWrapper;
