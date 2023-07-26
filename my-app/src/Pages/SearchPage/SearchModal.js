import React from "react";
import styled from "styled-components";

const SearchModal = () => {
  return (
    <ModalWrapper>
      <Div>
        <PencilIcon>edit</PencilIcon>
        <Span>콘 추가</Span>
      </Div>
      <Div>
        <ShareIcon>share</ShareIcon>
        <Span>공유하기</Span>
      </Div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 130px;
  height: 80px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  position: absolute;
  right: 0;
  top: 30px;
  background-color: white;

  > div:nth-of-type(1) {
    border-bottom: 1px solid #e8e8e8;
  }
`;

const PencilIcon = styled.div.attrs({
  className: "material-symbols-outlined",
})`
  color: #b1b1b1;
  margin-right: 0.5rem;
`;

const ShareIcon = styled.div.attrs({
  className: "material-symbols-outlined",
})`
  color: #b1b1b1;
  margin-right: 0.5rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
`;

const Span = styled.span`
  color: #242424;
  font-size: 14px;
  font-weight: 400;
`;

export default SearchModal;
