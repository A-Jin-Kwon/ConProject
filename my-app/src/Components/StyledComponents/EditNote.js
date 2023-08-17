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
        e.preventDefault();
        // console.log(props.content);
        dispatch({ type: "modalFlip" }, { type: "addCon", content: props.content });
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
