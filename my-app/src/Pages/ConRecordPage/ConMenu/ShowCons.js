import styled from "styled-components";
import { useState } from "react";
import GetEachCon from "./GetEachCon";
import DeleteCon from "../DeleteCon/DeleteCon";

const ShowCons = () => {
  // 임시 객체 배열 - 백에서 데이터 가져올 예정
  // 임시로 고유의 id를 지정해줬습니다. -> 상세페이지 때문
  const [record, setRecord] = useState([
    {
      id: "asdfsadfsa",
      title: "마당이 있는 집",
      date: "2023-07-12",
      rating: "2.5",
      img: "imgs/image21.png",
    },
    {
      id: "dwcveqasdf",
      title: "엘리멘탈",
      date: "2023-07-09",
      rating: "5.0",
      img: "imgs/image22.png",
    },
    {
      id: "gtryw123sd",
      title: "바비",
      date: "2023-07-03",
      rating: "4.5",
      img: "imgs/image23.png",
    },
    {
      id: "jhffyrews23ed",
      title: "스파이더맨: 뉴 유니버스",
      date: "2023-06-27",
      rating: "5.0",
      img: "imgs/image24.png",
    },
    {
      id: "dkdlcllcmcndj",
      title: "해리포터와 마법사의 돌",
      date: "2023-06-16",
      rating: "5.0",
      img: "imgs/image25.png",
    },
    {
      id: "ffko9dkeww",
      title: "헤어질 결심",
      date: "2023-06-08",
      rating: "4.0",
      img: "imgs/image26.png",
    },
    {
      id: "mmmjgjgjfi",
      title: "벼랑 위의 포뇨",
      date: "2023-05-29",
      rating: "5.0",
      img: "imgs/image27.png",
    },
    {
      id: "lloijdhywggs",
      title: "리바운드",
      date: "2023-05-17",
      rating: "3.0",
      img: "imgs/image28.png",
    },
  ]);

  const [isDelModOpen, setIsDelModOpen] = useState(false);
  const delModalHandler = () => {
    setIsDelModOpen(true);
  };
  const closeModalHandler = () => {
    setIsDelModOpen(false);
  };

  return (
    <Container>
      <NumOfCon>{record.length}개 콘</NumOfCon>
      <ConContainer>
        {record.map((ele, idx) => (
          <GetEachCon
            ele={ele}
            key={idx}
            idx={idx}
            delModalHandler={delModalHandler}
            record={record}
          />
        ))}
      </ConContainer>
      {isDelModOpen ? (
        <DeleteCon closeModalHandler={closeModalHandler} />
      ) : null}
    </Container>
  );
};

export default ShowCons;

const Container = styled.div`
  padding: 4.5rem 0;
  width: 70%;
  margin: 0 auto;
`;
const NumOfCon = styled.h3`
  display: flex;
`;
const ConContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 5%;
`;
