import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import ListCounter from '@/components/layouts/ListCounter';
import FolderList from '@/components/folders/FolderList';
import { MODAL_TYPE } from '@/components/modals/type';
import React, { useContext, useEffect } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { FolderContext } from '@/contexts/FolderContext';
import { FolderModel } from '@/components/folders/type';

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
    <div>
      <GNB />
      <Layout>
        <ListCounter count={0} isWord={false} />
        <button onClick={() => handleClickFolder()}>폴더 추가하기</button>
        <FolderList />
      </Layout>
    </div>
  );
};

export default FolderListPage;
