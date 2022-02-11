import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Button from '@/components/buttons/Button';
import { ModalContext } from '@/contexts/ModalContext';
import tw from 'twin.macro';

const Wrapper = styled.div`
  width: 100%;
  min-width: 18.75rem;
  min-height: 9.1875rem;
  padding: 1.5rem 2rem;
`;

const Title = styled.p`
  ${tw`font-bold text-gray-70`}
  font-size: 1.125rem;
  line-height: 1.4375rem;
`;

const ButtonGroup = styled.div`
  ${tw`flex mt-6`}
  gap: 0.5rem;
`;
const DeleteModal = () => {
  const { handleModal } = useContext(ModalContext);
  const handleClickClose = () => {
    handleModal();
  };
  const handleClickDelete = () => {
    console.log('delete');
  };
  return (
    <Wrapper>
      <Title>이 폴더를 정말 삭제하시겠어요?</Title>
      <ButtonGroup>
        <Button color={'bg-gray-30'} onClick={handleClickClose} minWidth={'7.1rem'}>
          <span className="text-gray-70">삭제하기</span>
        </Button>
        <Button color={'bg-primary'} onClick={handleClickDelete} minWidth={'7.1rem'}>
          <span className="text-white">수정하기</span>
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default DeleteModal;
