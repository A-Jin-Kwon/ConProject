import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const JoinEmailHeader = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/login");
    }

    return(
        <header>
            <Wrapper>
                <SpaceLeft/>
                <SpaceLeft>
                    <Image src="navigate_next.png" onClick={clickHandler}/>
                </SpaceLeft>
                <HeaderText>
                    회원가입
                </HeaderText>
                <SpaceRight/>
            </Wrapper>
        </header>
    );
};

export default JoinEmailHeader;

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
const Image = styled.img`
    color: #2e2e2e;
    cursor: pointer;
`;