import NavigateHeader from "../../Components/Header/NavigateHeader";
import styled from "styled-components";
import ContentsInfo from "./ContentsInfo/ContentsInfo";

const RecordCon = () => {
  return (
    <div>
      <NavigateHeader headerTitlte={"콘기록"} path={"/conrecord"} />
      <FormWrapper>
        <ContentsInfo/>
      </FormWrapper>
    </div>
  );
};

export default RecordCon;

const FormWrapper = styled.div`
  height: calc(100vh - 71px);
`;
