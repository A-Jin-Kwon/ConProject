import { useRef, useState } from "react";
import { styled } from "styled-components";

const ProfileImg = () => {
  const fileInput = useRef(null);
  const [image, setImage] = useState("./imgs/defaultProfile.svg");

  const onChangeFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Profile 
        src={image} 
        alt="profile" 
        onClick={() => fileInput.current.click()} 
        style={{ cursor: "pointer" }} 
      />
      <input
        type="file"
        name="profile-image"
        onChange={onChangeFile}
        ref={fileInput}
        style={{ display: "none" }}
      />
    </div>

  );
};

export default ProfileImg;


const Profile = styled.img`
  display: flex;
  justify-content: center;
`

