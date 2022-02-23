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
import { useQuery, useQueryClient } from 'react-query';
import ErrorBoundary from '@/components/boundaries/ErrorBoundary';
import { findAllFolders } from '@/utils/firebase';

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

const Wrapper = styled.div`
  background: #eef1f4;
  max-width: 960px;
  margin: 0 auto;
`;

const FolderListPage = () => {
  const { handleModal } = React.useContext(ModalContext);
  const { selectFolder } = useContext(FolderContext);

  useEffect(() => {
    selectFolder({} as FolderModel);
  }, []);

  const fetchData = async () => {
    const data: FolderModel[] = await findAllFolders();
    return data;
  };

  const { isLoading, data } = useQuery('folders', fetchData);

  if (isLoading) {
    return <></>;
  }

  const handleClickFolder = () => {
    handleModal(MODAL_TYPE.FOLDER);
  };

  return (
    <>
      <Wrapper>
        <GNB />
        <Layout>
          <Header>
            <ListCounter count={data?.length ?? 0} isWord={false} />
            <ButtonWrapper onClick={() => handleClickFolder()}>
              <BtnAdd />
              폴더 추가하기
            </ButtonWrapper>
          </Header>
          <FolderList />
        </Layout>
      </Wrapper>
    </>
  );
};

export default FolderListPage;
