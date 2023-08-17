import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 뒤로 이동하는 헤더 내의 화살표 컴포넌트입니다!

const PrevArrow = () => {
  const navigate = useNavigate();
  const markup = { __html: "chevron_left" };

  const clickHandler = () => {
    navigate(-1);
  };
  // 리액트에서 innerHTML을 사용하는 방법 dangerouslySetInnerHTML로 사용하기
  return <BackBtn dangerouslySetInnerHTML={markup} onClick={clickHandler}></BackBtn>;
};

export default PrevArrow;

const BackBtn = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  cursor: pointer;
  color: #2e2e2e;
`;

const Image = styled.img`
  color: #2e2e2e;
  cursor: pointer;
`;
