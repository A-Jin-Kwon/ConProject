import PrevArrow from "../../../Components/Header/PrevArrow";
import styled from "styled-components";
import ConDetailModal from "./ConDetailModal";
import { useState, useRef, useEffect } from "react";

const ConDetailHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const modalRef = useRef(null);

  //   모달 바깥 영역 클릭 시, 모달 close
  useEffect(() => {
    const handleClose = (e) => {
      if (isOpen && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClose);

    return () => document.removeEventListener("click", handleClose);
  }, [isOpen]);

  const [isDelModOpen, setIsDelModOpen] = useState(false);
  const delModalHandler = () => {
    setIsDelModOpen(true);
  };

  return (
    <Header>
      <Wrapper>
        <PrevArrow />
        <HeaderText>콘기록</HeaderText>
        <Vert src="/imgs/more_vert.svg" onClick={clickHandler} ref={modalRef} />
        {isOpen ? <ConDetailModal delModalHandler={delModalHandler} /> : null}
      </Wrapper>
    </Header>
  );
};

export default ConDetailHeader;

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  align-items: center;
`;
const Header = styled.header`
  height: 70px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
`;
const HeaderText = styled.div`
  color: #242424;
  font-weight: 700;
  font-size: 16px;
`;
const Vert = styled.img`
  cursor: pointer;
`;
