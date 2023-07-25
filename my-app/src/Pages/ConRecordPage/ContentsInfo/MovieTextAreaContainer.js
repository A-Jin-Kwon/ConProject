import styled from "styled-components";
import TextArea from "../TextAreaHeight";

// 영화와 드라마의 레이아웃이 다르기 때문에 재사용 가능하게 바꿔줬습니다
// 이건 영화용! 드라마는 DramaTextAreaContainer.js에 있습니다.

const MovieTextAreaContainer = ({imgSrc, deleteImgHandler}) => {
    return(
        <TextAreaWrapper>
        {imgSrc === "" ? null : (
          <ImgContainer>
            <AddedImg src={imgSrc} alt="" />
            <DeleteImg src="imgs/cancel.png" onClick={deleteImgHandler} />
          </ImgContainer>
        )}
        <TextArea/>
      </TextAreaWrapper>

    );
};

export default MovieTextAreaContainer;

const TextAreaWrapper = styled.div`
  width: 100%;
`;
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