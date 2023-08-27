import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { YellowCircle } from "./HomeCalendar";

const DateClickPopper = ({ clickPos, anchorEl, date }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [open, setOpen] = useState(false);

  const dateFormating = () => {
    const dateParts = date.split("-");
    // const year = dateParts[0];
    setMonth(dateParts[1]);
    setDay(dateParts[2]);
  };

  useEffect(() => {
    dateFormating();
    {
      clickPos ? setOpen(true) : setOpen(false);
    }
    // setOpen(true);
  }, [clickPos]);

  return (
    <StyledPopper open={open} anchorEl={anchorEl}>
      <Box sx={{ p: 1, bgcolor: "white", borderRadius: 2, boxShadow: "0px 2px 16px  rgba(112, 112, 112, 0.78)" }}>
        <Title>
          {month}월 {day}일<PopperCloseIcon onClick={() => setOpen(false)}></PopperCloseIcon>
        </Title>
        <ContentDiv>
          <YellowCircle></YellowCircle>
          akjsdnak
          <PopperEditNote></PopperEditNote>
        </ContentDiv>
      </Box>
    </StyledPopper>
  );
};

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: 700;
  font-size: 14px;
`;

const ContentDiv = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 300px;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 14px;
`;

const PopperCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 15px;
  right: 12px;
  color: #909090;
  cursor: pointer;
`;

const PopperEditNote = styled(EditNoteIcon)`
  position: absolute;
  right: 5px;
  cursor: pointer;
`;

export default DateClickPopper;
