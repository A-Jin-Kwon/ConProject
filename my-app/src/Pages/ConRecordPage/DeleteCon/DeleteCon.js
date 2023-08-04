import styled from "styled-components";

const DeleteCon = ({ closeModalHandler }) => {
  return (
    <>
      <Layer /> {/*모달 배경 영역 */}
      <Container>
        <CheckContainer>
          <Question>콘을 삭제하시겠습니까?</Question>
        </CheckContainer>
        <BtnWrapper>
          <CancelBtn className="BTN" onClick={closeModalHandler}>
            취소
          </CancelBtn>
          <DelBtn className="BTN">삭제</DelBtn>
        </BtnWrapper>
      </Container>
    </>
  );
};

export default DeleteCon;

const BtnWrapper = styled.div`
  display: flex;
  height: 60px;
`;
const Layer = styled.div`
  z-index: 100;
  display: block;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Container = styled.div`
  z-index: 150;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 220px;
`;
const CheckContainer = styled.div`
  background-color: white;
  height: 160px;
  border-radius: 8px 8px 0 0;
`;
const Question = styled.p`
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #242424;
  font-weight: 400;
`;
const CancelBtn = styled.button`
  background-color: #6c6c6c;
  color: white;
  width: 100%;
  border: none;
  font-weight: 700;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  border-radius: 0 0 0 8px;
`;
const DelBtn = styled.button`
  background-color: #ededed;
  color: #909090;
  width: 100%;
  border: none;
  font-weight: 700;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  border-radius: 0 0 8px 0;
`;
