import { Link } from 'react-router-dom';
import styled from 'styled-components';
import JoinCheckBoxItem from './JoinCheckBoxItem';
import JoinCheckHeader from './JoinCheckHeader';

export default function JoinCheck() {

    return(
        <div>
          <JoinCheckHeader />

          <CheckBoxGroup>

            <CheckItem>
              <JoinCheckBoxItem content="(필수) 이용약관"/>
              <CheckWhole to="/joinRule-fullContent">전문보기</CheckWhole>
            </CheckItem>

            <CheckItem>
              <JoinCheckBoxItem content="(필수) 개인정보 수집 및 동의"/>
              <CheckWhole to="/joinRule-fullContent">전문보기</CheckWhole>
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
  align-items: center;
  flex-direction: column;
  padding: 150px;
  margin-top: 150px;
  border-bottom: 1px solid #E8E8E8;
`;
const CheckItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 900px;
  justify-content: space-between;
  margin: 10px;
`;
const CheckWhole = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 15.47px;
  color: black;
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

`;