import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const RecordMain = () => {
    const navigate = useNavigate();

    const addClickHandler = () => {
        navigate('/record-con');
    };

    return(
        <div>
            <AddCon onClick={addClickHandler}>
                <AddIcon src="imgs/edit_square.png"/>
            </AddCon>
            <div>
                <p>기록한 콘이 없습니다.</p>
            </div>
        </div>
    );
};

export default RecordMain;

const AddIcon = styled.img`
    width: 24px;
    height: 24px;
    position: relative;
    left: 18px;
    top: 18px;
`;
const AddCon = styled.div`
    border: 1px solid #d5d5d5;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: absolute;
    right: 20rem;
    cursor: pointer;
`;