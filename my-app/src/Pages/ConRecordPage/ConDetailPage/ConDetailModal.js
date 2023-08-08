import styled from "styled-components";

const ConDetailModal = ({ delModalHandler }) => {
  return (
    <ModalMenu>
      <LI>
        <img src="/imgs/edit.svg" />
        <Span>수정하기</Span>
      </LI>
      <HR />
      <LI className="Delete" onClick={delModalHandler}>
        <img src="/imgs/delete.svg" />
        <Span>삭제하기</Span>
      </LI>
    </ModalMenu>
  );
};

export default ConDetailModal;

const ModalMenu = styled.ul`
  cursor: pointer;
  list-style: none;
  border: 1px solid #e8e8e8;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0;
  z-index: 5;
  border-radius: 8px;
  right: 0%;
  bottom: -100%;
  position: absolute;
`;
const LI = styled.li`
  list-style: none;
  padding: 0.5rem 2rem;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;

  &.Delete {
    color: #e61a1a;
  }
`;
const HR = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
  border: none;
  margin: 0;
`;
const Span = styled.span`
  margin-left: 0.5rem;
`;
