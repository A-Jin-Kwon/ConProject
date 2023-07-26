import styled from "styled-components";

const AddImage = ({ changeAddImgHandler, imgRef }) => {
  const clickHandler = () => {
    imgRef.current.click();
  };

  return (
    <Container>
      <Input
        type="file"
        ref={imgRef}
        accept="image/jpg, image/jpeg, image/png"
        onChange={changeAddImgHandler}
      />
      <ImageIcon src="imgs/Frame50.png" onClick={clickHandler} />
    </Container>
  );
};

export default AddImage;

const Container = styled.div`
  padding: 0.2rem 0;
`;
const Input = styled.input`
  display: none;
`;
const ImageIcon = styled.img`
  cursor: pointer;
`;
