import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CornFAQ = () => {
  const [settingpage, setSettingPage] = useState("cornFAQ");
  const clickHandler = (e) => {
    console.log(e.target.id);
    setSettingPage(e.target.id);
  };

  const FAQ = [
    {
      question: "콘기록에서 이미지는 어떻게 추가하나요?",
      answer: "콘 작성 페이지에서 이미지 추가를 통해 추가할 수 있습니다.",
    },
    {
      question: "콘텐츠 공유는 무엇인가요?",
      answer:
        "콘기록을 하고 난 뒤 원하는 콘텐츠의 한줄평을 작성하고 커뮤니티에 공유하여 다른 사람과 나눌 수 있는 서비스입니다.",
    },
    {
      question: "회차 마다 기록하고 싶은데 어떻게 하나요?",
      answer:
        "드라마 같이 회차가 있는 콘을 추가할 때 작성 페이지에서 회차 버튼을 선택하면 그 회차의 소감을 기록할 수 있습니다.",
    },
    {
      question: "알림은 무엇인가요?",
      answer: "콘텐츠의 방영 알림을 입력하신 이메일로 받을 수 있습니다.",
    },
  ];

/*아코디언*/
  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if (selected == i) {
        return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <div style={{ fontFamily: "NanumSquareNeo" }}>
      <header className="MI_Header">
        <Link
          to="/setting"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "black",
            marginLeft: "10%",
          }}
        >
          <div
            className="MI_Header_1"
            to={"/setting"}
            id="backToSetting"
            onClick={clickHandler}
            settingpage={settingpage}
          >
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</h2>
          </div>
        </Link>
        <div className="MI_Header_2">
          <h4>FAQ</h4>
        </div>
      </header>
      <div className='FAQwrapper'>
            <div className='FAQaccordion'>
              <div className='FAQjaju'><h1>사람들이 자주 하는 질문을 확인해보세요</h1></div>
              {FAQ.map((item, i)=>(
                  <div className='FAQitem'>
                      <div className='FAQtitle' onClick={()=>toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                      </div>
                      <div className={selected === i ? 'FAQcontent show' : 'FAQcontent'}>
                      {item.answer}</div>
                  </div>
              ))}

            </div>
          </div>

    </div>
  );
};

export default CornFAQ;

const Wrapper = styled.div`
  width: 1100px;
  height: 1100px;
  border: 1px solid blue;
  margin-left: 17%;
  margin-top: 30px;
`;

const Accordion = styled.div`
  border: 1px solid green;
  width: 1100px;
  padding: 10px;
`;

const Question = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
    font-weight: bold;
    cursor: pointer;
`;

const Answer = styled.div`
  margin-top: 10px;
  background-color: #E6E6E6;
`;
