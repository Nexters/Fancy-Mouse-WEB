import GNB from '@/components/navigation/GNB';
import WordList from '@/components/words/WordList';
import ListCounter from '@/components/layouts/ListCounter';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import React, { useContext } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { FolderContext } from '@/contexts/FolderContext';
import { MODAL_TYPE } from '@/components/modals/type';
import { BtnBack, BtnEdit, BtnTrash } from '@/assets/icons';
import { useRouter } from 'next/router';
import { useFolder } from '@/hooks/useFolder';
import { FolderModel } from '@/components/folders/type';

const Header = styled.section`
  ${tw`flex justify-between items-center text-gray-70 font-bold`}
  height: 2.5rem;
  font-size: 1.5rem;
  line-height: 1.875rem;
  margin-bottom: 2.5rem;

  .button-wrapper {
    display: inherit;
    gap: 1rem;
    font-size: 1rem;
  }

  .button {
    display: inherit;
    align-items: center;
    font-size: 1rem;
    line-height: 1.25rem;

    &.delete {
      ${tw`text-folder07`}
    }
  }
`;

const Wrapper = styled.div`
  background: #eef1f4;
  max-width: 960px;
  margin: 0 auto;
`;

const FolderDetailPage = () => {
  const { handleModal } = useContext(ModalContext);
  const { selectFolder, selectedFolder } = useContext(FolderContext);
  const router = useRouter();

  const folderId = router.query.folderId;
  const formattedFolder = useFolder(folderId) as FolderModel;

  const handleClickDelete = (e) => {
    e.stopPropagation();

    if (Object.keys(selectedFolder).length === 0) selectFolder(formattedFolder);
    else selectFolder(selectedFolder);
    handleModal(MODAL_TYPE.DELETE);
  };
  const handleClickEdit = (e) => {
    e.stopPropagation();
    if (Object.keys(selectedFolder).length === 0) selectFolder(formattedFolder);
    else selectFolder(selectedFolder);
    handleModal(MODAL_TYPE.FOLDER);
  };

  return (
    <>
      <Wrapper>
        <GNB />
        <Header>
          <p className="flex">
            <BtnBack className="mr-6 cursor-pointer" onClick={() => router.back()} />
            {formattedFolder.folderName}
          </p>
          <div className="button-wrapper">
            <button onClick={handleClickEdit} className="button">
              <BtnEdit />
              수정하기
            </button>
            <button onClick={handleClickDelete} className="button delete">
              <BtnTrash />
              삭제하기
            </button>
          </div>
        </Header>
        <ListCounter count={formattedFolder.wordList?.length ?? 0} isWord />
        <WordList />
      </Wrapper>
    </>
  );
};

export default FolderDetailPage;
