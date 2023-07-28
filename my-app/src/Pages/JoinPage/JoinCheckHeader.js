import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const JoinCheckHeader = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/join");
    }

    return(
        <header>
            <Wrapper>
                <SpaceLeft/>
                <SpaceLeft>
                    <Image src="imgs/navigate_next.png" onClick={clickHandler}/>
                </SpaceLeft>
                <HeaderText>
                    이용약관 및 개인정보에 관한 동의
                </HeaderText>
                <SpaceRight/>
            </Wrapper>
        </header>
    );
};

export default JoinCheckHeader;

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
    color: #242424;
    font-weight: 700;
    font-size: 16px;
`;
const Image = styled.img`
    color: #2e2e2e;
    cursor: pointer;
`;