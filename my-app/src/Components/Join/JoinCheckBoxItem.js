import styled from "styled-components";

export default function CheckBoxItem({content}) {
  return (
    <Check>
        <CheckBoxGroup>
            <CheckBox type="checkbox"/>
            <CheckBoxContent>{content}</CheckBoxContent>
        </CheckBoxGroup>
    </Check>
  )
}
const Check = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`
const CheckBoxGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

`;

const CheckBox = styled.input`
  appearance: none;
  border: 1.5px solid rgba(177, 177, 177, 1);
  border-radius: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: rgba(255, 192, 0, 1);
  }
`;

const CheckBoxContent = styled.div`
  color: rgba(46, 46, 46, 1);
  font-family: "NanumSquareNeoContents";
  font-weight: 700;
  font-size: 16px;
  line-height: 17.69px;
`;
