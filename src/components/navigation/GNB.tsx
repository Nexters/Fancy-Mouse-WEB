import styled from '@emotion/styled';
import tw from 'twin.macro';
import { ModalContext } from '@/contexts/ModalContext';
import React from 'react';
import { MODAL_TYPE } from '@/components/modals/type';

const GNB = () => {
  const { handleModal } = React.useContext(ModalContext);
  return (
    <GNBWrapper>
      <Logo>Fancy Mouse</Logo>
      <div>
        <button onClick={() => handleModal(MODAL_TYPE.WORD)}>Username 님</button>
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
