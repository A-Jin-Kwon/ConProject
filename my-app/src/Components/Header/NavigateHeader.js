import styled from 'styled-components';
import PrevArrow from './PrevArrow';

// 헤더에 들어갈 텍스트와 화살표를 눌렀을 때 이동할 라우트를 보내주세요.
const NavigateHeader = ({headerTitlte, path}) => {
    return(
        <header>
            <Wrapper>
                <SpaceLeft/>
                <SpaceLeft>
                    <PrevArrow path={path}/>
                </SpaceLeft>
                <HeaderText>
                    {headerTitlte}
                </HeaderText>
                <SpaceRight/>
            </Wrapper>
        </header>
    );
};

export default NavigateHeader;

const Wrapper = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
`;
const SpaceLeft = styled.div`
    flex: 1;
`;
const SpaceRight = styled.div`
    flex: 2;
`;
const HeaderText = styled.div`
    font-color: #242424;
    font-weight: 700;
    font-size: 16px;
`;