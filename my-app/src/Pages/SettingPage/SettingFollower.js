import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "styled-components";
import { StyledFollowButton } from "../../Components/StyledComponents/StyledComponents";
import NavigateHeader from "../../Components/Header/NavigateHeader";


const SettingFollower = ()=>{

    const [settingpage, setSettingPage] = useState("SettingFollower");
    const clickHandler = (e) => {
        console.log(e.target.id);
        setSettingPage(e.target.id);
    };


    const ButtonItem = ({ defaultText}) => {

        const [isFollowed, setIsFollowed] = useState(false);
        
        const handleButtonClick = ()=>{
            setIsFollowed((state)=>!state);
        };

        return (
            <StyledFollowButton onClick={handleButtonClick} isFollowed={isFollowed}>
              {isFollowed ? "팔로우" : defaultText}
            </StyledFollowButton>
          );
    };

    const [followed, setFollowed] = useState(false);

    return(
        <div>
            <NavigateHeader headerTitlte={"팔로워"}/>

            <Following_Wrap>
                <Following_Wrap_1>
                    <Following_Wrap_1_1>
                        <Following_Wrap_1_1_1></Following_Wrap_1_1_1>
                        <Following_Wrap_1_1_2>
                            <Following_Wrap_1_1_2_1><h4>고경우</h4></Following_Wrap_1_1_2_1>
                            <Following_Wrap_1_1_2_2><h5>추천 콘텐츠 12</h5></Following_Wrap_1_1_2_2>
                        </Following_Wrap_1_1_2>
                        <Following_Wrap_1_1_3>
                        <ButtonItem defaultText="팔로잉"/>
                        </Following_Wrap_1_1_3>
                    </Following_Wrap_1_1>
                    <Following_Wrap_1_2>
                        <Following_Wrap_1_1_1></Following_Wrap_1_1_1>
                        <Following_Wrap_1_1_2>
                            <Following_Wrap_1_1_2_1><h4>권순찬</h4></Following_Wrap_1_1_2_1>
                            <Following_Wrap_1_1_2_2><h5>추천 콘텐츠 5</h5></Following_Wrap_1_1_2_2>
                        </Following_Wrap_1_1_2>
                        <Following_Wrap_1_1_3>
                            <ButtonItem defaultText="팔로잉"/></Following_Wrap_1_1_3>
                    </Following_Wrap_1_2>
                </Following_Wrap_1>
                <Following_Wrap_2>
                    <Following_Wrap_1_1>
                        <Following_Wrap_1_1_1></Following_Wrap_1_1_1>
                        <Following_Wrap_1_1_2>
                            <Following_Wrap_1_1_2_1><h4>박제영</h4></Following_Wrap_1_1_2_1>
                            <Following_Wrap_1_1_2_2><h5>추천 콘텐츠 12</h5></Following_Wrap_1_1_2_2>
                        </Following_Wrap_1_1_2>
                        <Following_Wrap_1_1_3>
                            <ButtonItem defaultText="팔로잉"/></Following_Wrap_1_1_3>
                    </Following_Wrap_1_1>
                    <Following_Wrap_1_2>
                        <Following_Wrap_1_1_1></Following_Wrap_1_1_1>
                        <Following_Wrap_1_1_2>
                            <Following_Wrap_1_1_2_1><h4>강현구</h4></Following_Wrap_1_1_2_1>
                            <Following_Wrap_1_1_2_2><h5>추천 콘텐츠 7</h5></Following_Wrap_1_1_2_2>
                        </Following_Wrap_1_1_2>
                        <Following_Wrap_1_1_3>
                            <ButtonItem defaultText="팔로잉"/></Following_Wrap_1_1_3>
                    </Following_Wrap_1_2>
                </Following_Wrap_2>
                <Following_Wrap_3>
                    <Following_Wrap_1_1>
                        <Following_Wrap_1_1_1></Following_Wrap_1_1_1>
                        <Following_Wrap_1_1_2>
                            <Following_Wrap_1_1_2_1><h4>장제원</h4></Following_Wrap_1_1_2_1>
                            <Following_Wrap_1_1_2_2><h5>추천 콘텐츠 19</h5></Following_Wrap_1_1_2_2>
                        </Following_Wrap_1_1_2>
                        <Following_Wrap_1_1_3>
                            <ButtonItem defaultText="팔로잉"/></Following_Wrap_1_1_3>
                    </Following_Wrap_1_1>
                </Following_Wrap_3>
            </Following_Wrap>
        </div>
    );
}
const Following_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15%; margin-right: 18%;
`
const Following_Wrap_1 = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E6E6E6;
    height: 80px;
    margin-top: 60px;
    padding-bottom: 10px;
`
const Following_Wrap_1_1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`
const Following_Wrap_1_1_1 = styled.div`
    width: 80px;
    background-color: #FFC000;
    border-radius: 12px;
`
const Following_Wrap_1_1_2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    width: 300px;
`
const Following_Wrap_1_1_2_1 = styled.div`
    height: 40%;
`
const Following_Wrap_1_1_2_2 = styled.div`
    height: 20%;
    color: #6C6C6C;
`
const Following_Wrap_1_1_3 = styled.div`
    width: 110px;
    height: 50%;
    border-radius: 12px;
    padding-top: 20px;
    padding-left: 30px;
`
const Following_Wrap_1_2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`
const Following_Wrap_2 = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E6E6E6;
    height: 80px;
    margin-top: 10px;
    padding-bottom: 10px;
`
const Following_Wrap_3 = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E6E6E6;
    height: 80px;
    margin-top: 10px;
    padding-bottom: 10px;
`
const Following_Wrap_4 = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E6E6E6;
    height: 80px;
    margin-top: 10px;
    padding-bottom: 10px;
`
const Following_Wrap_5 = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E6E6E6;
    height: 80px;
    margin-top: 10px;
    padding-bottom: 10px;
`

export default SettingFollower;