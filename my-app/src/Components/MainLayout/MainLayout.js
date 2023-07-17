import { Outlet } from "react-router-dom";
import Header from "../Header/MainHeader";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
