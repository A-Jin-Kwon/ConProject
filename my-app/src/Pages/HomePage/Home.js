import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FcModal from './FcModal';

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleDateNumberClick = (dateStr, clientX, clientY) => {
    setSelectedDate(dateStr);
    setShowModal(true);
    setModalPosition({
      top: clientY + 3, // 상단 위치 조정 (10px 아래로)
      left: clientX + 3, // 왼쪽 위치 조정 (10px 오른쪽으로)
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  // FullCalendar의 기본 설정에 따라 날짜 옆에 '일' 이라는 텍스트가 표시됩니다.
  // 이를 제거하기 위해 dayCellContent 설정을 커스터마이즈합니다.
  // 이렇게 하면 날짜 숫자만 표시됩니다.

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
        events={[
          { title: 'event 1', date: '2023-07-24' },
          { title: 'event 2', date: '2019-04-02' },
        ]}
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
        />
      )}
    </>
  );
}
