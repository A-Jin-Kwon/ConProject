import styled from 'styled-components';
import CheckBoxItem from '../../Components/CheckBoxItem';
import JoinHeader from '../../Components/Header/JoinHeader';

export default function JoinCheck() {
    return(
        <div>
          <JoinHeader headerTitle="이용약관 및 개인정보에 관한 동의"/>

          <CheckBoxGroup>

            <CheckItem>
              <CheckBoxItem content="(필수) 이용약관"/>
              <CheckWhole>전문보기</CheckWhole>
            </CheckItem>

            <CheckItem>
              <CheckBoxItem content="(필수) 개인정보 수집 및 동의"/>
              <CheckWhole>전문보기</CheckWhole>
            </CheckItem>

          </CheckBoxGroup>


          <AgreeBtnWrapper>
              <AgreeBtn>전체동의</AgreeBtn>
          </AgreeBtnWrapper>
        </div>
    )
}

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 150px;
  margin-top: 150px;
  border-bottom: 1px solid #E8E8E8;
`;
const CheckItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;
const CheckWhole = styled.div`
  font-family: "NanumSquareNeoContents";
  font-weight: 400;
  font-size: 14px;
  line-height: 15.47px;

`;

const AgreeBtnWrapper = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
`;

const AgreeBtn = styled.button`
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 4px;
  cursor: pointer;
  font-family: "NanumSquareNeoContents";

`;