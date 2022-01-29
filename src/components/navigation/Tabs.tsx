import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import React from 'react';
import { PATH_NAME } from '@/components/layouts/constants';
import { TapProps } from '@/components/navigation/type';

const TabWrapper = styled('nav')`
  ${tw`flex border-b-2 font-bold`}
  background: transparent;
  align-items: center;
  height: 2.625rem;
  border-color: #e9ebee;
  margin-bottom: 2.5rem;
  gap: 1rem;
  background: transparent;
`;
const Tab = styled('div')<TapProps>`
  color: ${({ isSelected }) => (isSelected ? '#3A4552' : '#c5c8cd')};
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid black' : '#e9ebee')};
  z-index: 1;
  height: inherit;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

const Tabs = ({ pathname }) => {
  const isWordTab = pathname === PATH_NAME.WORD || pathname === null;
  const isFolderTab = pathname === PATH_NAME.FOLDER;
  return (
    <TabWrapper>
      <Tab isSelected={isWordTab}>
        <Link href="/">
          <a>저장한 단어</a>
        </Link>
      </Tab>
      <Tab isSelected={isFolderTab}>
        <Link href="/folder">
          <a>폴더</a>
        </Link>
      </Tab>
    </TabWrapper>
  );
};

export default Tabs;
