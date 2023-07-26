import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import ko from "date-fns/locale/ko";
import styled from 'styled-components';

const SelectTime = () => {
    registerLocale("ko", ko);
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <Container>
            {/* label 적용 시, 시간을 선택해도 달력이 닫히지 않는 오류 발생 */}
            <Label>
            <CalendarIcon src="imgs/calendar_month.png"/>
            <StyledDatePicker
                dateFormat="  yyyy년 MM월 dd일   a hh시 mm분"
                dateFormatCalendar="yyyy년 MM월"
                timeFormat="HH:mm"
                timeCaption="시간"
                locale="ko"
                selected={selectedDate}
                onChange={(date) => {
                        setSelectedDate(date);
                    }
                }
                showTimeSelect
            />
            </Label>
        </Container>
    );
};

export default SelectTime;

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