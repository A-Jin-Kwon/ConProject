import styled from "styled-components";
import { useState } from "react";

const ShowCons = () => {
  // 임시 객체 배열 - 백에서 데이터 가져올 예정
  const [record, setRecord] = useState([
    {
      title: "마당이 있는 집",
      date: "2023-07-12",
      rating: 2.5,
      img: "imgs/image21.png",
    },
    {
      title: "엘리멘탈",
      date: "2023-07-09",
      rating: 5.0,
      img: "imgs/image22.png",
    },
    {
      title: "바비",
      date: "2023-07-03",
      rating: 4.5,
      img: "imgs/image23.png",
    },
    {
      title: "스파이더맨: 뉴 유니버스",
      date: "2023-06-27",
      rating: 5.0,
      img: "imgs/image24.png",
    },
    {
      title: "해리포터와 마법사의 돌",
      date: "2023-06-16",
      rating: 5.0,
      img: "imgs/image25.png",
    },
    {
      title: "헤어질 결심",
      date: "2023-06-08",
      rating: 4.0,
      img: "imgs/image26.png",
    },
    {
      title: "벼랑 위의 포뇨",
      date: "2023-05-29",
      rating: 5.0,
      img: "imgs/image27.png",
    },
    {
      title: "리바운드",
      date: "2023-05-17",
      rating: 3.0,
      img: "imgs/image28.png",
    },
  ]);

  return (
    <Container>
      <NumOfCon>{record.length}개 콘</NumOfCon>
      <ConContainer>
        {record.map((ele) => (
          <EachCon>
            <Img src={ele.img} />
            <div>
              <div>
                <div>
                  {ele.title}
                  <img src="imgs/Bounding-box.png" />
                </div>
                {ele.date}
              </div>
              <div>
                <img src="imgs/yellow_star.png" />
                {ele.rating}
              </div>
            </div>
          </EachCon>
        ))}
      </ConContainer>
    </Container>
  );
};

export default ShowCons;

const Container = styled.div`
  padding-top: 4.5rem;
`;
const NumOfCon = styled.h3`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;
const EachCon = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  margin: 1rem;
  cursor: pointer;
`;
const Img = styled.img`
  border-radius: 12px 12px 0 0;
`;
const ConContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;
