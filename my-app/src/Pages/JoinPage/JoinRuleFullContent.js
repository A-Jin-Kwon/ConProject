import styled from 'styled-components';
import JoinRuleHeader from './JoinRuleHeader';

export default function JoinRuleFullContent() {
    return(
        <div>
            <JoinRuleHeader />
            <Container>
                <p>
                    <JoinRule>Con 이용약관</JoinRule>
                    <JoinRuleNumber>제1장 총칙</JoinRuleNumber>
                    <JoinRuleNumber>제1조 [목적]</JoinRuleNumber>
                    <JoinRuleContent>본 약관은 주식회사 Con(이하 '회사'라고 합니다)에서 제공하는 콘텐츠 서비스(웹서비스, 검색 서비스 등을 포함합니다) 및 제반 서비스를 이용함에 있어 '회원’과 ‘회사' 간의 권리, 의무 및 책임사항, 서비스 이용조건 등 기본적인 사항을 규정하는 것을 목적으로 합니다.</JoinRuleContent>
                </p>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1180px;
    align-items: center;
`
const JoinRule = styled.div`
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`
const JoinRuleNumber = styled.div`
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`
const JoinRuleContent = styled.div`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`