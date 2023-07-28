import styled from 'styled-components';
import { Link } from 'react-router-dom';


const JoinRule = () => {
    return( 
        // 이용약관 동의 간주
        <JoinRuleContent> 
            {/* 이용약관 동의하러 들어가기 */}
            <p>SNS로 로그인 및 회원가입 시 CON의 <Link to="/join-check">이용약관</Link>과 <br/>
            <Link to="/join-check">개인정보 수집 및 이용</Link>에 동의한 것으로 간주합니다.</p>
        </JoinRuleContent>

    )
}


export default JoinRule;

const JoinRuleContent = styled.p`
  color: rgba(144, 144, 144, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 22.4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  border-top: 1px solid rgba(213, 213, 213, 1);
`