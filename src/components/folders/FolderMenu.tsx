import styled from '@emotion/styled';
import tw from 'twin.macro';
import BtnEdit from '@assets/icons/btn_edit.svg';
import BtnTrash from '@assets/icons/btn_trash.svg';
import { useContext } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { MODAL_TYPE } from '@/components/modals/type';
import { FolderModel } from '@/components/folders/type';
import { FolderContext } from '@/contexts/FolderContext';

const Wrapper = styled.div`
  position: relative;
  right: 140px;
`;

const Menu = styled.ul`
  ${tw`absolute bg-primary p-2`}
  width: 8.9rem;
  box-shadow: 0px 10px 20px rgba(58, 69, 82, 0.2);
  border-radius: 0.625rem;
`;

const ListItem = styled.li`
  ${tw`font-normal flex justify-center items-center`}
  font-size: 1rem;
  line-height: 1.25rem;
  border-radius: 0.625rem;
  width: 7.9rem;
  height: 3.5rem;

  &.edit {
    ${tw`text-white`}
  }

  &.delete {
    ${tw`text-folder07`}
  }

  &:hover {
    ${tw`bg-primaryDark`}
  }
`;

const FolderMenu = ({ selectedFolder }: { selectedFolder: FolderModel }) => {
  const { handleModal } = useContext(ModalContext);
  const { selectFolder } = useContext(FolderContext);
  const handleClickDelete = (e) => {
    //여기는 API 연동이 아닌, 그냥 모달 띄우기만!!
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
    <Wrapper>
      <Menu>
        <div className="flex flex-col text-center">
          <ListItem className="edit" onClick={handleClickEdit}>
            <BtnEdit className="mr-2" />
            폴더 수정
          </ListItem>
          <ListItem className="delete" onClick={handleClickDelete}>
            <BtnTrash className="mr-2" />
            폴더 삭제
          </ListItem>
        </div>
      </Menu>
    </Wrapper>
  );
};

export default FolderMenu;
