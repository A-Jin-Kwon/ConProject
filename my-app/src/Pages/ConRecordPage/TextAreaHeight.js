import { useRef, useState } from "react";
import styled from 'styled-components';

const TextArea = () => {
    // input 내용 관리
    const [review, setReview] = useState("");
    const reviewChangeHandler = (e) => {
        setReview(e.target.value);
    };

    const textRef = useRef();
      const handleResizeHeight = () => {
      // textarea 높이 조절
        if (textRef && textRef.current) {
            textRef.current.style.height = "0px";
            const scrollHeight = textRef.current.scrollHeight;
            textRef.current.style.height = scrollHeight + "px";
        }
    };
    
    return (
        <ReviewInput
            ref={textRef}
            placeholder="콘텐츠를 보고 난 후 후기를 작성해주세요!"
            onInput={handleResizeHeight}
            onChange={reviewChangeHandler}
            value={review}
        />
    );
};

export default TextArea;

  const ReviewInput = styled.textarea`
  border: none;
  color: #242424;
  font-size: 14px;
  font-weight: 400;
  //outline: none;
  resize: none;
  width: 100%;
`;