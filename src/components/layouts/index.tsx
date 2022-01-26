import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled('nav')`
  background: transparent;
  padding: 1em;
  height: 2em;
  display: flex;
  align-items: center;
`;
const PageBody = styled('div')`
  width: 100%;
  height: 100%;
  padding: 2em;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Nav>
        <Link href="/">
          <a>저장한 단어</a>
        </Link>
        <Link href="/folder">
          <a>폴더</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </>
  );
};

export default Layout;
