import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import ListCounter from '@/components/layouts/ListCounter';
import FolderList from '@/components/folders/FolderList';
import { MODAL_TYPE } from '@/components/modals/type';
import React, { useContext, useEffect } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { FolderContext } from '@/contexts/FolderContext';
import { FolderModel } from '@/components/folders/type';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { BtnAdd } from '@/assets/icons';

const Header = styled.section`
  ${tw`flex justify-between`}
  font-size: 1rem;
  line-height: 1.25rem;
`;

const ButtonWrapper = styled.p`
  display: inherit;
  gap: 0.5rem;
  cursor: pointer;
`;

const FolderListPage = () => {
  const { handleModal } = React.useContext(ModalContext);
  const { selectFolder } = useContext(FolderContext);
  const handleClickFolder = () => {
    handleModal(MODAL_TYPE.FOLDER);
  };
  useEffect(() => {
    selectFolder({} as FolderModel);
  }, []);
  return (
    <>
      <GNB />
      <Layout>
        <Header>
          <ListCounter count={0} isWord={false} />
          <ButtonWrapper onClick={() => handleClickFolder()}>
            <BtnAdd />
            폴더 추가하기
          </ButtonWrapper>
        </Header>
        <FolderList />
      </Layout>
    </>
  );
};

export default FolderListPage;
