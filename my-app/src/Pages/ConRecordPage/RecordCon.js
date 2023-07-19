import NavigateHeader from "../../Components/Header/NavigateHeader";
import { useState } from "react";
import styled from 'styled-components';
import ShowStars from "./ShowStars";

const RecordCon = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    const [title, setTitle] = useState("");
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const [review, setReview] = useState("");
    const reviewChangeHandler = (e) => {
        setReview(e.target.value);
    };

    return(
        <div>
            <NavigateHeader headerTitlte={'콘기록'} path={'/conrecord'} />
            <FormWrapper>
                <Form onSubmit={submitHandler}>
                    <TitleInput
                        placeholder="콘텐츠 제목을 입력해주세요"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                    <Hr/>
                    <div>
                        <ImageIcon src="imgs/Frame50.png"/>
                    </div>
                    <Hr/>
                    <div>
                        <span>평점</span>
                        <div><ShowStars/></div>
                    </div>
                    <Hr/>
                    <ReviewInput
                        placeholder="콘텐츠를 보고 난 후 후기를 작성해주세요!"
                        value={review}
                        onChange={reviewChangeHandler}
                        type="textarea"
                    />
                </Form>
            </FormWrapper>
        </div>
    );
};

export default RecordCon;

const ImageIcon = styled.img`
    cursor: pointer;
`;
const TitleInput = styled.input`
    font-size: 28px;
    font-weight: 800;
    border: none;
    font-color: #242424;
    outline: none;
    width: 100%;
`;
const ReviewInput = styled.textarea`
    border: none;
    font-color: #242424;
    outline: none;
    width: 100%;
    height: 100%;
    resize: none;
`;
const Hr = styled.hr`
    border: 1px solid #e6e6e6;
`;
const FormWrapper = styled.div`
    height: calc(100vh - 71px);
`;
const Form = styled.form`
    width: 70%;
    height: 100%;
    margin: 0 auto;
`;