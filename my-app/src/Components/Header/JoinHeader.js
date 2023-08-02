import styled from 'styled-components';

const JoinHeader = ({headerTitle}) => {
    return(
        <HeaderWrapper>{headerTitle}</HeaderWrapper>
    );
};

export default JoinHeader;

const HeaderWrapper = styled.div`
    border-bottom: 1px solid #E8E8E8;
    font-weight: 700;
    font-size: 16px;
    line-height: 17.68px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;