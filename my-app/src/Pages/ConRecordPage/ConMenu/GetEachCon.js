import styled from "styled-components";
import ShowModal from "../Modal/ShowModal";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const GetEachCon = ({ ele, idx, delModalHandler, record }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const modalRef = useRef(null);

  //   모달 바깥 영역 클릭 시, 모달 close
  useEffect(() => {
    const handleClose = (e) => {
      if (isOpen && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClose);

    return () => document.removeEventListener("click", handleClose);
  }, [isOpen]);

  const Navigate = useNavigate();

  // 콘기록 이미지 클릭 시, 상세 페이지로 이동
  const imgClickHandler = () => {
    console.log(record);
    Navigate(`/conrecord/${ele.id}`, {
      state: record,
    });
  };

  return (
    <EachCon>
      <Img src={ele.img} onClick={imgClickHandler} />
      <InfoContainer>
        <div>
          <TitleWrapper>
            <Title>{ele.title}</Title>
            <Vert
              src="imgs/more_vert.svg"
              id={idx}
              onClick={clickHandler}
              ref={modalRef}
            />
            {isOpen ? (
              <ShowModal
                delModalHandler={delModalHandler}
                imgPath={ele.img}
                title={ele.title}
              />
            ) : null}
          </TitleWrapper>
          <Date>{ele.date}</Date>
        </div>
        <HR />
        <Rating>
          <img src="imgs/yellow_star.png" />
          <RatingScore>{ele.rating}</RatingScore>
        </Rating>
      </InfoContainer>
    </EachCon>
  );
};

export default GetEachCon;

const EachCon = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  position: relative;
  width: 280px;
`;
const Img = styled.img`
  border-radius: 12px 12px 0 0;
  width: 280px;
  cursor: pointer;
`;
const Vert = styled.img`
  cursor: pointer;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
const Date = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
  color: #909090;
`;
const HR = styled.hr`
  height: 1px;
  border: none;
  background-color: #e6e6e6;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
`;
const RatingScore = styled.div`
  font-size: 12px;
  margin-left: 0.5rem;
`;
const InfoContainer = styled.div`
  padding: 1.45rem;
`;
