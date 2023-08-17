import { useParams, useLocation } from "react-router-dom";
import ConDetailHeader from "./ConDetailHeader";

const ConDetailPage = () => {
  // 작품 고유 id 받아옴
  let { id } = useParams();

  //   GetEachCon으로부터 작품 저장된 배열인 record를 받아옴
  const { state } = useLocation();
  console.log(state);

  //   클릭한 작품과 같은 id를 가진 작품을 찾아서 정보를 가져옴
  let findItem = state.find((item) => {
    return item.id === id;
  });

  return (
    <div>
      <ConDetailHeader />
      <div>
        <h1>상세 페이지입니다.</h1>
        <p>제목: {findItem.title}</p>
        <p>저장 날짜: {findItem.date}</p>
        <p>별점: {findItem.rating}</p>
      </div>
    </div>
  );
};

export default ConDetailPage;
