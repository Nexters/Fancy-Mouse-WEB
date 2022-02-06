import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Tabs from '@/components/navigation/Tabs';

const PageBody = styled('div')`
  width: 100%;
  min-height: calc(100vh - 21rem);
  height: 100%;
`;

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Tabs pathname={pathname} />
      <PageBody>{children}</PageBody>
    </>
  );
};

export default Layout;
