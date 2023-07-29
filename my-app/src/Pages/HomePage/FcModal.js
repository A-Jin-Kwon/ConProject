import React from 'react';
import '../HomePage/FcModal.css';
import { styled } from 'styled-components';

const FcModal = ({ date, onClose, style }) => {
  // 전달받은 날짜를 JavaScript Date 객체로 변환
  const selectedDate = new Date(date);
  // 콘
  const cornEx = "킹더랜드";
  
  // 원하는 형식으로 날짜와 월을 가져와서 조합
  const formattedDate = `${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`;

  return (
    <div className="fcmodal" style={style}>
      <div className="fcmodal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p style={{marginLeft:'105px', marginTop:'0px',fontSize:'12px'}}>{formattedDate}</p> {/* 변환한 날짜를 표시 */}
        <FcModalCorn>
          {cornEx}
        </FcModalCorn>
      </div>
    </div>
  );
};

export default FcModal;

const FcModalCorn = styled.div`
  border: 1px solid red;
  height: 30px;
  font-Size: 14px;
  font-weight: 600;
`


