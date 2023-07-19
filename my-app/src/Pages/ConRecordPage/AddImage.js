import styled from "styled-components";

const AddImage = ({ changeAddImgHandler, imgRef }) => {
  const clickHandler = () => {
    imgRef.current.click();
  };

  return (
    <div>
      <Input
        type="file"
        ref={imgRef}
        accept="image/jpg, image/jpeg, image/png"
        onChange={changeAddImgHandler}
      />
      <ImageIcon src="imgs/Frame50.png" onClick={clickHandler} />
    </div>
  );
};

export default AddImage;

const Input = styled.input`
  display: none;
`;
const ImageIcon = styled.img`
  cursor: pointer;
`;
