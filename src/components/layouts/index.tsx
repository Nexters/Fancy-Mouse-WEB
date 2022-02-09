import React from 'react';
import styled from '@emotion/styled';

const PageBody = styled('div')`
  width: 100%;
  min-height: calc(100vh - 21rem);
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <PageBody>{children}</PageBody>
    </>
  );
};

export default Layout;
