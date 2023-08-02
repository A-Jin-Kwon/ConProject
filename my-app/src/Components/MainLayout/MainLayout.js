import { Outlet } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};

const PageLayout = styled.main`
  width: 100%;
  padding-top: 70px;
`;

export default MainLayout;
