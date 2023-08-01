import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import JoinCheckHeader from './JoinCheckHeader';


export default function JoinCheck() {

  const data = [
      { id: 0, title: 'CON 이용약관 (필수)' },
      { id: 1, title: '개인정보 수집 및 동의 (필수)' },
  ];

  // 체크된 아이템을 담을 배열
  const [checkedItems, setCheckedItems] = useState([]);
  
  // NextBtn 활성화 상태를 관리하는 state
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true);


  // 체크박스 단일 선택
  const handleSingleCheckbox = (checked, id) => {
    if (checked) {
      setCheckedItems(prev => [...prev, id]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id)); 
    }
  };

  // 체크된 아이템이 두 개 모두 있을 경우 NextBtn 활성화, 하나라도 체크가 안 되었을 경우 비활성화
  useEffect(() => {
    setIsNextBtnDisabled(checkedItems.length !== 2);
  }, [checkedItems]);

  // 체크박스 전체 선택
  const handleAllChecked = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열idArray로 checkItems 상태 업데이트
      const idArray = data.map((el) => el.id);
      // data.forEach((el) => idArray.push(el.id));
      setCheckedItems(idArray);
      // 전체 선택 시 NextBtn 활성화
      setIsNextBtnDisabled(false);
    } 
    else {
      setCheckedItems([]);
      // NextBtn 비활성화
      setIsNextBtnDisabled(true);
    }
  };

  return (
    <div>
      <JoinCheckHeader/>
      <form>
        <StyledTable>
          <thead>
            <tr>
              <th>
                <input type='checkbox' styled={{borderRadius: "50px"}}
                  onChange={(e) => handleAllChecked(e.target.checked)}
                  // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 
                  checked={checkedItems.length === data.length ? true : false} />
              </th>
              <th>전체 동의</th>
            </tr>
          </thead>

          <tbody >
            {data?.map((data, key) => (
              <tr key={key}>
                <td>
                  <input type='checkbox' name={`select-${data.id}`}
                    onChange={(e) => handleSingleCheckbox(e.target.checked, data.id)}
                    // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                    checked={checkedItems.includes(data.id) ? true : false} />
                </td>
                <td >{data.title}</td>
                <Link to="/joinRule-fullContent">
                  <td style={{paddingTop: "15px", paddingLeft: "550px", color: "black"}}>전문보기</td>
                </Link>
              </tr>
            ))}
          </tbody>

        </StyledTable>

        <NextBtnWrapper>
          <Link to="/join-email">
            <NextBtn className="GoNextBtn" disabled={isNextBtnDisabled}> 다음 </NextBtn>
          </Link>
        </NextBtnWrapper>
      </form>
      

    </div>

  )
}

const StyledTable = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 900px;
  padding: 150px;
  padding-top: 250px;
  margin: auto;
  border-bottom: 1px solid #E8E8E8;

  thead{
    width: 900px;
    tr{
      th{
        padding: 7px 15px;
        color: rgba(46, 46, 46, 1);
        font-weight: 700;
        font-size: 16px;
        line-height: 17.68px;

        input {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          appearance: none;
          border: 2px solid rgba(177, 177, 177, 1);
          cursor: pointer;

          &:checked {
            border-color: transparent;
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
            background-size: 100% 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: rgba(255, 192, 0, 1);
          }
        }
      }
    }
  }
  tbody{
    width: 900px;
    /* align-items: center; */
    tr{
      width: 900px;
      align-items: center;



      td{
        padding: 7px 15px;
        font-size: 15px;


        input {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 2px solid rgba(177, 177, 177, 1);
          cursor: pointer;
          appearance: none;

          &:checked {
            border-color: transparent;
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
            background-size: 100% 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: rgba(255, 192, 0, 1);
          }
        }
      }
    }
  }
`;


const NextBtnWrapper = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
`;

const NextBtn = styled.button`
  box-shadow: none;
  width: 416px;
  height: 48px;
  background-color: #ffc000;
  border: 1px solid #ffc000;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;