import React from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

const ModalContent = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper>
      <Div>콘을 추가하시겠습니까?</Div>
      <BtnWrapper>
        <ModalBtn
          cancle
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "modalFlip" }, { type: "initCon" });
          }}
        >
          취소
        </ModalBtn>
        <ModalBtn
          onClick={(e) => {
            console.log(e);
          }}
        >
          추가
        </ModalBtn>
      </BtnWrapper>
    </ModalWrapper>
  );
};

const Button = ({ children, cancle, ...props }) => {
  return <button {...props}>{children}</button>;
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 220px;
  background-color: white;
  border-radius: 8px;
  z-index: 150;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  color: #242424;
  font-weight: 400;
  font-size: 16px;
`;

const BtnWrapper = styled.div`
  display: flex;
  height: 60px;
`;

const ModalBtn = styled(Button)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  font-weight: 700;
  padding: 0;
  cursor: pointer;

  ${(props) =>
    props.cancle
      ? css`
          background-color: #ededed;
          color: #909090;
          border-radius: 0 0 0 8px;
        `
      : css`
          background-color: #ffc000;
          border-radius: 0 0 8px 0;
          color: #242424;
        `}
`;

const ModalOutline = styled.div``;

export default ModalContent;
