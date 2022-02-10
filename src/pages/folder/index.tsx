import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import ListCounter from '@/components/layouts/ListCounter';
import FolderList from '@/components/folders/FolderList';
import { MODAL_TYPE } from '@/components/modals/type';
import React from 'react';
import { ModalContext } from '@/contexts/ModalContext';

const FolderListPage = () => {
  const { handleModal } = React.useContext(ModalContext);
  const handleClickFolder = () => {
    handleModal(MODAL_TYPE.FOLDER);
  };
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
