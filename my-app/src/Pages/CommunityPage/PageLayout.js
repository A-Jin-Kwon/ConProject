import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";

const Content = styled.main`
  max-width: 1180px;
  /* 자동 가운데 정렬을 위해 margin auto를 줬음 */
  margin: 0 auto 0 auto;
  box-sizing: border-box;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const StyledContainer = styled(Container)`
  padding: 0;
`;

export default PageLayout;
