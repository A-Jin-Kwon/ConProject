import styled from 'styled-components';
import { Link } from 'react-router-dom';


const JoinRule = () => {
    return(
        <PrivacyContent>         
            SNS로 로그인 및 회원가입 시 CON의 <Link to="/check">이용약관</Link>과 
            <br/>
            <Link to="/check">개인정보 수집 및 이용</Link>에 동의한 것으로 간주합니다.          
        </PrivacyContent>
    )
}

export default JoinRule;

const PrivacyContent = styled.p`
  font-family: "NanumSquareNeoContents";
  color: rgba(144, 144, 144, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 22.4px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap 
`