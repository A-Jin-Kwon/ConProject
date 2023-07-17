import styled from "styled-components";

export default function PrivacyAgreement() {
  return (
    <div>
        <PrivacyAgreement>SNS로 로그인 및 회원가입 시 CON의 이용약관과
            <br/>개인정보 수집 및 이용에 동의한 것으로 간주합니다.</PrivacyAgreement>
    </div>
  )
}


const PrivacyAgreement = styled.div`
    color: rgba(144, 144, 144, 1);
    font-weight: 400;
    font-size: 14px;
`