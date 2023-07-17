import { Outlet } from "react-router-dom";
import MainHeader from "../Header/MainHeader";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MainLayout;
