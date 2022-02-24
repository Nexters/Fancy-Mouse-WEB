import styled from '@emotion/styled';
import tw from 'twin.macro';
import React from 'react';
import Tabs from '@/components/navigation/Tabs';
import { useRouter } from 'next/router';
import LogoImg from '@assets/icons/logo.svg';

const Logo = styled.h1`
  ${tw`font-bold text-white`}
  font-size: 2rem;
`;

const GNBWrapper = styled.nav`
  ${tw`flex justify-between bg-primaryDark`}
  width: 60rem;
  max-height: 11.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 1.25rem;
  margin-top: 1.25rem;
`;

const UserText = styled.p`
  ${tw`text-secondary font-bold`}
  font-size: 1rem;
  line-height: 1.25rem;
`;

const GNB = ({ userInfo }: any) => {
  const { pathname, query } = useRouter();
  const isFolderDetailPage = !!query.folderId;
  return (
    <GNBWrapper>
      <div>
        <Logo>
          <LogoImg />
        </Logo>
        {!isFolderDetailPage && <Tabs pathname={pathname} />}
      </div>
      <UserText>
        {userInfo?.userName || '사용자'}
        <span className="text-gray-40 font-normal">님</span>
      </UserText>
    </GNBWrapper>
  );
};

export default GNB;
