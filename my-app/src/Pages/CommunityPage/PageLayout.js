import React from "react";
import styled from "styled-components";

const Content = styled.main`
  max-width: 1180px;
  margin: 0 auto 0 auto;
  box-sizing: border-box;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};

export default PageLayout;
