import styled from '@emotion/styled';
import tw from 'twin.macro';
import React from 'react';

const GNB = () => {
  return (
    <GNBWrapper>
      <Logo>Fancy Mouse</Logo>
      <div>
        <span>UserName님</span>
        <span>설정</span>
      </div>
    </GNBWrapper>
  );
};

const Logo = styled.h1`
  ${tw`font-bold`}
  font-size: 1.5rem;
`;

const GNBWrapper = styled.nav`
  ${tw`flex justify-between items-center`}
  width: 60rem;
  height: 3.5rem;
  margin-bottom: 2rem;
`;
export default GNB;
