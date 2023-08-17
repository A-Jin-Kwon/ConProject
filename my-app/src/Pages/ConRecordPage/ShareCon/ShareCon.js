import { useLocation } from "react-router-dom";
import NavigateHeader from "../../../Components/Header/NavigateHeader";
import styled from "styled-components";

const ShareCon = () => {
  const location = useLocation();

  const imgPath = location.state.imgPath;
  const title = location.state.title;

  return (
    <div>
      <NavigateHeader headerTitlte="한 줄 평 작성" />
      <Container>
        <InfoContainer>
          <Img src={imgPath} />
          <Title>{title}</Title>
        </InfoContainer>
        <Form>
          <Input
            type="text"
            placeholder="커뮤니티에 공유할 콘텐츠에 대한 한 줄 평을 작성해주세요"
          />
          <Btn>공유하기</Btn>
        </Form>
      </Container>
    </div>
  );
};

export default ShareCon;

const Container = styled.div`
  width: 70%;
  margin: 4rem auto;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 380px;
  height: 550px;
  border-radius: 12px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
`;
const Input = styled.input`
  width: 780px;
  height: 62px;
  border: 1px solid #d5d5d5;
  padding: 0.15rem 2rem;
  border-radius: 8px;
  color: #909090;
  font-size: 14px;
  font-weight: 400;
`;
const Btn = styled.button`
  background-color: #ffc000;
  width: 380px;
  height: 48px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
`;
