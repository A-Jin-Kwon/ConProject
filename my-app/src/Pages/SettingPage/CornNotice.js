import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "styled-components";

const CornNotice = () => {
  const [settingpage, setSettingPage] = useState("cornNotice");
  const clickHandler = (e) => {
    console.log(e.target.id);
    setSettingPage(e.target.id);
  };

  let notice = [
    { title: '[공지] 서비스 업데이트', date: '2023.07.06' },
    { title: '[공지] 이용약관 일부 변경', date: '2023.07.02' },
    { title: '[공지] 일부 기능 수정', date: '2023.06.19' },
    { title: '[공지] 서비스 점검 안내', date: '2023.06.10' }
  ];

  return (
    <div style={{ fontFamily: 'NanumSquareNeo' }}>
      <header className="MI_Header">
        <Link to="/setting" style={{ textDecoration: 'none', cursor: 'pointer', color: "black", marginLeft: "10%" }}>
          <div className="MI_Header_1" to={'/setting'} id="backToSetting" onClick={clickHandler} settingpage={settingpage}>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</h2>
          </div>
        </Link>
        <div className="MI_Header_2">
          <h4>공지사항</h4>
        </div>
      </header>
      <NoticeBigWraper>
        {notice.map((noticeItem, index) => (
          <NoticeWraper key={index}>
            <Title>{noticeItem.title}</Title>
            <Date>{noticeItem.date}</Date>
          </NoticeWraper>
        ))}
      </NoticeBigWraper>
    </div>
  );
}

export default CornNotice;

const NoticeBigWraper = styled.div`
  height: 1100px;
  width: 1100px;
  margin-left: 17%;
  margin-top: 30px;
`
const NoticeWraper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E6E6E6;
  padding: 20px 0;
`

const Title = styled.div`
  margin-bottom: 20px;
`

const Date = styled.div`
  color: #777;
`
