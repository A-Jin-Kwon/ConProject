import NavigateHeader from "../../Components/Header/NavigateHeader";
import { useState, useRef } from "react";
import styled from "styled-components";
import ShowStars from "./ShowStars";
import AddImage from "./AddImage";
import TextArea from "./TextAreaHeight";

const RecordCon = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const [review, setReview] = useState("");
  const reviewChangeHandler = (e) => {
    setReview(e.target.value);
  };

  // 이미지 추가
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef();

  const changeAddImgHandler = () => {
    const file = imgRef.current.files[0];
    if (!file) {
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
    }
  };

  const deleteImgHandler = () => {
    setImgSrc("");
  };

  return (
    <div>
      <NavigateHeader headerTitlte={"콘기록"} path={"/conrecord"} />
      <FormWrapper>
        <Form onSubmit={submitHandler}>
          <TitleInput
            placeholder="콘텐츠 제목을 입력해주세요"
            value={title}
            onChange={titleChangeHandler}
          />
          <Hr />
          <AddImage changeAddImgHandler={changeAddImgHandler} imgRef={imgRef} />
          <Hr />
          <div>
            <span>평점</span>
            <div>
              <ShowStars />
            </div>
          </div>
          <Hr />
          <TextAreaWrapper>
            {imgSrc === "" ? null : (
              <ImgContainer>
                <AddedImg src={imgSrc} alt="" />
                <DeleteImg src="imgs/cancel.png" onClick={deleteImgHandler} />
              </ImgContainer>
            )}
            <TextArea/>
          </TextAreaWrapper>
          <button>저장하기</button>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default RecordCon;

const ImgContainer = styled.div`
  width: 380px;
  height: 550px;
  margin: 0 auto;
  position: relative;
`;
const AddedImg = styled.img`
  width: 380px;
  height: 550px;
  display: block;
`;
const DeleteImg = styled.img`
  position: absolute;
  right: 1%;
  top: 1%;
  cursor: pointer;
`;
const TitleInput = styled.input`
  font-size: 28px;
  font-weight: 800;
  border: none;
  color: #242424;
  outline: none;
  width: 100%;
`;
const TextAreaWrapper = styled.div`
  width: 100%;
`;
const Hr = styled.hr`
  border: 1px solid #e6e6e6;
`;
const FormWrapper = styled.div`
  height: calc(100vh - 71px);
`;
const Form = styled.form`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;
