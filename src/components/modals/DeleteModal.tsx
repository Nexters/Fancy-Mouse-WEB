import Button from '@/components/buttons/Button';
import { FolderModel } from '@/components/folders/type';
import { FolderContext } from '@/contexts/FolderContext';
import { ModalContext } from '@/contexts/ModalContext';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import tw from 'twin.macro';
import { deleteFolder } from '../../utils/firebase';
import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

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
  const { selectFolder, selectedFolder } = useContext(FolderContext);
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteFolderApi = () => {
    return deleteFolder(selectedFolder.folderId);
  };

  const mutation = useMutation(deleteFolderApi, {
    onSuccess: () => {
      handleModal();
      selectFolder({} as FolderModel);
      return queryClient.invalidateQueries('folders');
    },
  });

  const handleClickClose = () => {
    handleModal();
    selectFolder({} as FolderModel);
  };
  const handleClickDelete = () => {
    mutation.mutate();
    handleModal();
    selectFolder({} as FolderModel);
    if (router.query.folderId) {
      router.push({
        pathname: '/folder',
      });
    }
  };

  return (
    <Wrapper>
      <Title>이 폴더를 정말 삭제하시겠어요?</Title>
      <ButtonGroup>
        <Button color={'bg-gray-30'} onClick={handleClickClose} minWidth={'7.1rem'}>
          <span className="text-gray-70">취소</span>
        </Button>
        <Button color={'bg-primary'} onClick={handleClickDelete} minWidth={'7.1rem'}>
          <span className="text-secondary">삭제하기</span>
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default DeleteModal;
