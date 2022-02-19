import GNB from '@/components/navigation/GNB';
import WordList from '@/components/words/WordList';
import ListCounter from '@/components/layouts/ListCounter';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useContext } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { FolderContext } from '@/contexts/FolderContext';
import { MODAL_TYPE } from '@/components/modals/type';

const Header = styled.section`
  ${tw`flex justify-between items-center text-gray-70 font-bold`}
  height: 2.5rem;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2.5rem;

  .button-wrapper {
    display: inherit;
    gap: 1rem;
    font-size: 1rem;
  }
`;

const FolderDetailPage = () => {
  const { handleModal } = useContext(ModalContext);
  const { selectFolder, selectedFolder } = useContext(FolderContext);
  const handleClickDelete = (e) => {
    //여기는 API 연동이 아닌, 그냥 모달 띄우기만!!
    console.log(selectedFolder);
    e.stopPropagation();
    selectFolder(selectedFolder);
    handleModal(MODAL_TYPE.DELETE);
  };
  const handleClickEdit = (e) => {
    e.stopPropagation();
    selectFolder(selectedFolder);
    handleModal(MODAL_TYPE.FOLDER);
  };
  return (
    <>
      <GNB />
      <Header>
        <span>기본 폴더</span>
        <div className="button-wrapper">
          <button onClick={handleClickEdit}>수정하기</button>
          <button onClick={handleClickDelete}>삭제하기</button>
        </div>
      </Header>
      <ListCounter count={0} isWord />
      <WordList />
    </>
  );
};

export default FolderDetailPage;
