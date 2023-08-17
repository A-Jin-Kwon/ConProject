import NavigateHeader from "../../Components/Header/NavigateHeader";
import styled from "styled-components";
import ContentsInfo from "./ContentsInfo/ContentsInfo";

//지환 수정본
import { useLocation } from "react-router-dom";
//지환 수정본

const RecordCon = () => {
  //지환 수정본
  //검색을 통해 넘어가는 콘텐츠 데이터(아래 설명은 변수명이 "content"라는 가정)
  //content.media_type이 movie면 제목이 content.title, movie가 아니면 content.name입니다.
  //포스터 사진은 src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
  const location = useLocation();
  const content = location.state.content;
  console.log(content);
  //여기까지
  return (
    <div>
      <NavigateHeader headerTitlte={"콘기록"} path={"/conrecord"} />
      <FormWrapper>
        <ContentsInfo />
      </FormWrapper>
    </div>
  );
};

export default RecordCon;

const FormWrapper = styled.div`
  height: calc(100vh - 71px);
`;
