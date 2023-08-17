import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ShowModal = ({ delModalHandler, imgPath, title }) => {
  const navigate = useNavigate();

  // 콘 공유하기 페이지에 해당 작품 이미지와 제목을 보내주는 기능
  const shareHandler = () => {
    navigate("/share-con", {
      state: {
        imgPath: imgPath,
        title: title,
      },
    });
  };

  return (
    <ModalMenu>
      <LI>
        <img src="imgs/edit.svg" />
        <Span>수정하기</Span>
      </LI>
      <HR />
      <LI onClick={shareHandler}>
        <img src="imgs/share.svg" />
        <Span>공유하기</Span>
      </LI>
      <HR />
      <LI className="Delete" onClick={delModalHandler}>
        <img src="imgs/delete.svg" />
        <Span>삭제하기</Span>
      </LI>
    </ModalMenu>
  );
};

export default ShowModal;

const ModalMenu = styled.ul`
  cursor: pointer;
  list-style: none;
  border: 1px solid #e8e8e8;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0;
  z-index: 5;
  border-radius: 8px;
  right: 0;
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
