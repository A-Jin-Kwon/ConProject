import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseServerURL } from "../../Components/StyledComponents/StyledComponents";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DateClickPopper from "./DateClickPopper";

const events = [{ title: "Meeting", start: new Date() }];

const HomeCalendar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popperOpen, setPopperOpen] = useState(false);
  const [popperDate, setPopperDate] = useState("");
  const [clientX, setClientX] = useState(0);

  useEffect(() => {
    const getAlarm = async () => {
      const auth = localStorage.getItem("auth");
      const res = await axios.get(baseServerURL + "/notifications", { headers: { Authorization: auth } });
      console.log(res);
    };
    // try {
    //   getAlarm();
    // } catch (err) {
    //   console.log(err);
    // }
  });

  // popper 위치 설정
  const handleAnchorPos = (e) => {
    setAnchorEl(e.dayEl);
  };

  // a custom render function
  function renderEventContent(eventInfo) {
    return (
      <EventInfo>
        {/* 콘기록 작성 여부 판단 필요 */}
        <PurpleCircle />
        <EventTitle>{eventInfo.event.title}</EventTitle>
      </EventInfo>
    );
  }

  const handleDateClick = (e) => {
    console.log(e);
    setClientX(e.jsEvent.clientX);
    setAnchorEl(e.dayEl);
    setPopperOpen(true);
    setPopperDate(e.dateStr);
  };

  const handleDayCellContent = (arg) => {
    // console.log(arg);
    const today = new Date();
    const date = arg.date.getDate();
    const month = arg.date.getMonth();
    const isToday = date === today.getDate() && month === today.getMonth();

    if (isToday) {
      // return <div className="today-cell">{date}</div>;
      return <StyledTodayDiv>{date}</StyledTodayDiv>;
    } else {
      return <div className="normal-cell">{date}</div>;
    }
  };

  return (
    <div>
      <CalendarContainer>
        <FullCalendar
          plugins={[interactionPlugin, dayGridPlugin]}
          locale={"ko"}
          initialView="dayGridMonth"
          buttonText={{
            today: ".",
          }}
          events={events}
          eventContent={renderEventContent}
          headerToolbar={{ left: "title prev today next", right: "" }}
          // 날짜 클릭 이벤트 감지
          selectable={true}
          dateClick={handleDateClick}
          // select={handleDateClick}
          // 오늘날짜 스타일 변경
          dayCellContent={handleDayCellContent}
        />
        <DateClickPopper clickPos={clientX} anchorEl={anchorEl} date={popperDate}></DateClickPopper>
      </CalendarContainer>
    </div>
  );
};

const EventInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const YellowCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffc000;
  margin-right: 5px;
`;

const PurpleCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #490171;
  margin-right: 5px;
`;

const EventTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const StyledTodayDiv = styled.div`
  /* width: 34px;
  height: 34px; */
  background-color: #ffc000;
  border-radius: 50%;
`;

// 달력의 일부 css custom
const CalendarContainer = styled.div`
  position: relative;
  font-family: "monsrat"
  font-size: 18px;
  font-weight: 700;
  /* 버튼 스타일링 -미완- */
  .fc-button,.fc-button-primary: hover {
    background-color: transparent;
    color: #b1b1b1;
  }
  .fc-prev-button,
  .fc-next-button {
    border: none;
    background-color: white;
    color: #b1b1b1;
  }
  /* .fc-button,
  .fc-button-primary: active {
    background-color: transparent;
    color: #b1b1b1;
  }
  .fc-prev-button,
  .fc-next-button: active {
    border: none;
    background-color: white;
    color: #b1b1b1;
  } */
  .fc-today-button {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #490171;
  }
  .fc-today-button:disabled {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #490171;
  }
  /* title, nextButton을 같은 줄에 */
  .fc-toolbar-chunk {
    display: flex;
  }
  /*  */
  .fc-daygrid-day-number {
    display: flex;
    justify-content: center;
    align-items: center;
    width:42px;
    height:42px;
  }
  /* 오늘 날짜와 노란색 circle 정렬하기 */
  .fc-daygrid-day-number > div {
    width:32px;
    height:32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 오늘 날짜 뒷배경 노란색 제거 */
  .fc-daygrid-day-frame {
    background-color: white;
  }
`;

export { YellowCircle, PurpleCircle };

export default HomeCalendar;
