import styled from '@emotion/styled';
import tw from 'twin.macro';
import Link from 'next/link';
import React from 'react';
import { PATH_NAME } from '@/components/layouts/constants';
import { TapProps } from '@/components/navigation/type';

const TabWrapper = styled('nav')`
  ${tw`flex`}
  background: transparent;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
const Tab = styled.div<TapProps>([
  ({ isSelected }) =>
    isSelected ? tw`text-secondary bg-primary rounded-lg border border-white/20` : tw`text-white opacity-25`,
  tw`font-bold p-4 text-lg leading-5`,
]);

const Tabs = ({ pathname }) => {
  // TODO: refactor logic
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
