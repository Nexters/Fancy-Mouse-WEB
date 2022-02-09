import styled from '@emotion/styled';
import tw from 'twin.macro';
import React from 'react';
import Tabs from '@/components/navigation/Tabs';
import { useRouter } from 'next/router';

const Logo = styled.h1`
  ${tw`font-bold text-white`}
  font-size: 2rem;
  margin-left: 1rem;
`;

const GNBWrapper = styled.nav`
  ${tw`flex justify-between bg-primaryDark`}
  width: 60rem;
  height: 11.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 1.25rem;
`;

const UserText = styled.p`
  ${tw`text-secondary font-bold`}
  font-size: 1rem;
  line-height: 1.25rem;
`;

const GNB = () => {
  const { pathname } = useRouter();
  return (
    <GNBWrapper>
      <div>
        <Logo>Fancy Mouse</Logo>
        <Tabs pathname={pathname} />
      </div>
      <UserText>
        UserName<span className="text-gray-40 font-normal">님</span>
      </UserText>
    </GNBWrapper>
  );
};

export default GNB;
