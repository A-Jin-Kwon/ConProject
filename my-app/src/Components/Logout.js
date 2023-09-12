import React from "react";
import { useDispatch } from "react-redux";

const useHandleLogout = () => {
  const dispatch = useDispatch();
  localStorage.removeItem("authObj");
  localStorage.removeItem("auth");
  dispatch({ type: "logOut" });
};

export { useHandleLogout };
