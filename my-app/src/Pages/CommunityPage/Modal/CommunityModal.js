import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ModalContent from "./ModalContent";

const Modal = () => {
  const dispatch = useDispatch();
  const isModalClicked = useSelector((state) => state.communityReducer.isModalClicked);
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={() => dispatch({ type: "modalFlip" })} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalContent />, document.getElementById("overlay-root"))}
    </>
  );
};

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.88);
  position: fixed;
`;

export default Modal;
