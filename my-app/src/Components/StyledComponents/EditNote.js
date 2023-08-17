import React, { forwardRef, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const EditNote = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  //update 되어야한다.
  //option 1개만 띄우기
  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        props.setOptionClicked(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [ref]);

  return (
    <Edit
      ref={ref}
      onClick={(e) => {
        //상세 페이지로 넘어가는 것을 막기 위해서
        e.preventDefault();
        dispatch({ type: "Multiple_Modal&ClickedContent", content: props.content });
        // dispatch({ type: "addCon", content: props.content });
        // props.setOptionClicked(true);
      }}
    >
      edit_note
    </Edit>
  );
});

const Edit = styled.div.attrs({
  className: "material-symbols-outlined",
})`
  cursor: cursor;
  color: #2e2e2e;
  z-index: 100;
`;

export default EditNote;
