import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FcModal from './FcModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faAt } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import Modal from '../HomePage/HomeModal';
import { styled } from 'styled-components';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";


// 이벤트의 고유 ID를 생성하는 함수
export function createEventId() {
  return String(eventGuid++);
}

let eventGuid = 0;
export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [showAddModal, setShowAddModal] = useState(false); // 알림 추가 모달의 상태를 관리하는 state
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState([]); // eventTitle 상태 추가
 

  const handleDateNumberClick = (dateStr, clientX, clientY) => {
    setSelectedDate(dateStr);
    setShowModal(true);
    setModalPosition({
      top: clientY + 3,
      left: clientX + 3,
    });

    // 선택한 날짜에 해당하는 이벤트들 찾기
    const eventsOnSelectedDate = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === new Date(dateStr).toDateString();
    });

    // FcModal로 이벤트들 전달
    setEventTitle(eventsOnSelectedDate.map((event) => event.title));
  };

  // 날짜 칸의 컨텐츠를 반환하는 함수
  const customDateCellContent = (arg) => {
    const { date } = arg;
    const dayNumber = date.getDate();

    return (
      <div className="custom-date-cell">
        <span
          onClick={(e) =>
            handleDateNumberClick(date.toISOString(), e.clientX, e.clientY)
          }
        >
          {dayNumber}
        </span>
       
      </div>
    );
  };


  // useRef 훅을 사용하여 버튼을 생성
  const addButtonRef = useRef(null);

  useEffect(() => {
    if (addButtonRef.current) {
      return;
    }
  
    const toolbar = document.querySelector('.fc-header-toolbar.fc-toolbar');
    if (toolbar) {
      const addButton = document.createElement('button');
      addButton.className = 'add-button';
      addButton.onclick = handleButtonClick;
      addButtonRef.current = addButton;
  
      // 아이콘과 텍스트를 함께 표시하는 컴포넌트를 렌더링하여 버튼 내용으로 만듦
      const icon = <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px' }} />;
      const text = '   알림 추가';
      ReactDOM.render(
        <>
          {icon}
          {text}
        </>,
        addButton
      );
  
      toolbar.appendChild(addButton);
    }
  }, []);
  

  const handleButtonClick = () => {
    // 알림 추가 버튼을 누를 때 처리 로직
    console.log('알림 추가 버튼이 클릭되었습니다.');
    setShowAddModal(true); // 알림 추가 모달을 열도록 상태 변경
  };

  const handleAddModalClose = () => {
    // 알림 추가 모달을 닫을 때 처리 로직
    console.log('알림 추가 모달이 닫혔습니다.');
    setShowAddModal(false); // 알림 추가 모달을 닫도록 상태 변경
  };

   // 알림 추가 모달의 콘텐츠 이름을 상태로 관리
   const [contentName, setContentName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [savedData, setSavedData] = useState([]);
   

   // 콘텐츠 이름이 변경될 때마다 상태 업데이트
   const handleContentNameChange = (e) => {
     setContentName(e.target.value);
   };
    // 콘텐츠 이름이 변경될 때마다 상태 업데이트
  const handleUserEmailChange = (e) => {
      setUserEmail(e.target.value);
    };
    // 날짜 선택이 변경될 때마다 상태 업데이트
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // 엔터를 누르면 입력한 내용을 JSON 형식으로 저장
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      const newData = {
        title: contentName,
        date: selectedDate.toISOString(),
        email: userEmail, // 이메일 정보 추가
      };
      setEvents((prevEvents) => [...prevEvents, newData]); // events에 데이터 추가
      // 저장 후 필드 초기화
      setContentName('');
      setSelectedDate(new Date());
      setUserEmail('');
      setShowAddModal(false); // 모달 창 닫기

      // 이벤트 데이터를 LocalStorage에 저장
      const existingData = localStorage.getItem('events');
      const eventsData = existingData ? JSON.parse(existingData) : [];
      eventsData.push(newData);
      localStorage.setItem('events', JSON.stringify(eventsData));

      // 콘솔에 저장된 데이터 출력
      console.log('New Data:', newData);
    }
  };
 // savedData가 변경될 때마다 콘솔에 출력
 useEffect(() => {
  console.log('Saved Data:', savedData);
}, [savedData]);

useEffect(() => {
  // LocalStorage에서 이벤트 데이터 불러오기
  const existingData = localStorage.getItem('events');
  if (existingData) {
    setEvents(JSON.parse(existingData));
  }

  // ... 이하 생략
}, []);

const handleCloseModal = () => {
  setShowModal(false);
};
 //날짜 선택 아진님 컨포넌트 들고 왔습니다 감사합니다!
 const SelectTime = ({ selectedDate, onDateChange }) => {
  registerLocale("ko", ko);
  const defaultDate = selectedDate ? new Date(selectedDate) : new Date(); // 선택한 날짜가 있을 경우 Date 객체로 변환
  const [currentDate, setCurrentDate] = useState(defaultDate);

  return (
    <Container>
      {/* label 적용 시, 시간을 선택해도 달력이 닫히지 않는 오류 발생 */}
      <Label>
        <CalendarIcon src="imgs/calendar_month.png" />
        <StyledDatePicker
          dateFormat="  yyyy년 MM월 dd일   a hh시 mm분"
          dateFormatCalendar="yyyy년 MM월"
          timeFormat="HH:mm"
          timeCaption="시간"
          locale="ko"
          selected={currentDate}
          onChange={(date) => {
            setCurrentDate(date);
            onDateChange(date); // 선택한 날짜를 상위 컴포넌트로 전달
          }}
          showTimeSelect
        />
      </Label>
    </Container>
  );
};

// FullCalendar의 eventContent prop을 정의하여 이벤트의 제목만 보이도록 설정
const eventContent = (arg) => {
  const eventTitle = arg.event.title; // 이벤트 제목
  const eventStyle = {
    backgroundColor: '#F8F8F8', // 배경색 설정
    marginLeft: '5px', // 마진 설정
    fontSize: '15px',
    width: '145px',
  };

  const circleStyle = {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#610097',
    marginRight: '5px',
  };

  return (
    <div style={{ backgroundColor: eventStyle.backgroundColor, marginLeft: eventStyle.marginLeft, fontSize: eventStyle.fontSize, width: eventStyle.width }}>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span style={circleStyle}></span>
        {eventTitle}
      </span>
    </div>
  );
};
  
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locales="ko"
        initialView="dayGridMonth"
        weekends={true}
        dayCellContent={customDateCellContent}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'prev,today,next',
        }}
        buttonText={{
          today: 'ㆍ',
        }}
        eventContent={eventContent} // eventContent prop을 전달하여 이벤트 표시 방식 설정
        events={events} // events 배열을 FullCalendar의 events prop으로 전달
      />
      {showModal && (
        <FcModal
          date={selectedDate}
          onClose={handleCloseModal}
          style={{
            position: 'absolute',
            top: modalPosition.top,
            left: modalPosition.left,
          }}
          eventTitle={eventTitle} // FcModal로 이벤트들 전달
        />
      )}

      {/* 알림 추가 모달 */}
      <Modal open={showAddModal} close={handleAddModalClose} header="알림 추가">
        {/* 모달 안에 들어갈 내용 */}
        <Alarm>
          <TitleIcon><FontAwesomeIcon icon={faBars} /></TitleIcon>
          <ContentTitle>
            <InputWrapper>
              {/* 콘텐츠 이름을 입력하는 input 요소 */}
              <input
                type="text"
                value={contentName}
                onChange={handleContentNameChange}
                placeholder="콘텐츠 이름 입력"
                style={{width:'360px', height:'35px', backgroundColor:'#F8F8F8', outline:'none',border:'none', borderRadius:'4px'}}
              />
            </InputWrapper>
          </ContentTitle>
        </Alarm>
        <Alarm>
          <InputWrapper>
          <SelectTime selectedDate={selectedDate} onDateChange={handleDateChange}/>
          </InputWrapper>
        </Alarm>
        <Alarm>
          <TitleIcon><FontAwesomeIcon icon={faAt} /></TitleIcon>
          <ContentTitle>
          <InputWrapper>
             {/* 이메일 입력하는 input 요소 */}
             <input
                type="text"
                value={userEmail}
                onChange={handleUserEmailChange}
                onKeyPress={handleEnterPress}
                placeholder="your@email.com"
                style={{width:'360px', height:'35px', backgroundColor:'#F8F8F8', outline:'none',border:'none', borderRadius:'4px'}}
              />
            </InputWrapper>
          </ContentTitle>
        </Alarm>
        {/* 이곳에 알림 추가 모달의 내용을 작성 */}
      </Modal>
    </>
  );
}

const Alarm = styled.div`
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  flex-direction: row;
  width: 410px;
  height: 45px;
`
const TitleIcon = styled.div`
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 40px;
  height: 45px;
`
const ContentTitle = styled.div`
  width: 380px;
  height: 45px;
`
const InputWrapper = styled.div`
  /* 가로 가운데 정렬을 위해 flex 사용 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;
/////SelectTime
const StyledDatePicker = styled(DatePicker)`
    border: none;
    font-size: 16px;
    width: 300px;
`;
const Container = styled.div`
    padding: 0.25rem;
`;
const CalendarIcon = styled.img`
    width: 17px;
    height: 19px;
    padding: 0 0.3rem;
`;
const Label = styled.label`
    display: flex;
`;