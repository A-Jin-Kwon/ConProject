import React from 'react';
import '../HomePage/FcModal.css';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FcModal = ({ date, onClose, style, eventTitle }) => {
  const selectedDate = new Date(date);
  const formattedDate = `${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`;

  const EventTitleContainer = styled.div`
    border-bottom: 1px solid #D5D5D5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 5px;
    margin-bottom: 5px;
    flex-grow: 1;
    span {
      margin-left: 8px; /* 간격 조정 */
    }
  `;

  const TitleText = styled.div`
    flex: 1; /* title 영역 너비 조절 */
  `;

  // eventTitle 배열의 길이가 3개 이상이면 스크롤을 활성화
  const modalContentStyle = {
    maxHeight: eventTitle.length > 2 ? '200px' : 'auto',
    overflowY: eventTitle.length > 2 ? 'auto' : 'unset',
  };

  return (
    <div className="fcmodal" style={style}>
      <div className="fcmodal-content" style={modalContentStyle}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p style={{ marginLeft: '105px', marginTop: '0px', fontSize: '12px' }}>
          {formattedDate}
        </p>
        <FcModalCorn>
          <UserTitle>
            <TitleText>
              {eventTitle.map((title) => (
                <EventTitleContainer key={title}>
                  {title}
                  <span>
                  <Link to="/record-con" style={{color:'black'}}>
                    <MoreVertIcon ><FontAwesomeIcon icon={faPenToSquare} /></MoreVertIcon></Link>
                  </span>
                </EventTitleContainer>
              ))}
            </TitleText>
          </UserTitle>
        </FcModalCorn>
      </div>
    </div>
  );
};

export default FcModal;




const FcModalCorn = styled.div`
  height: 30px;
  font-size: 14px;
  font-weight: 600;
`;

const UserTitle = styled.div`
  margin: 10px 0;
  display: flex; /* Flex 레이아웃 사용 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: space-between;
`;

const TitleText = styled.div`
  margin-right: 1px; /* "⋮"과 간격 조정 */
`;

const MoreVertIcon = styled.p`
  margin: 0;
  font-size: 16px;
  cursor: pointer;
`;
