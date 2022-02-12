import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Button from '@/components/buttons/Button';
import { ModalContext } from '@/contexts/ModalContext';
import CircleDefault from '@/assets/icons/IcCircleDefault';
import CircleHover from '@/assets/icons/IcCircleHover';
import CircleSelect from '@/assets/icons/IcCircleCheck';
import { FOLDER_COLORS } from '@/components/modals/constants';

const Wrapper = styled.div`
  ${tw`flex flex-col w-full p-6`}
  width: 25rem;
  min-height: 25.4rem;
  box-shadow: 0px 10px 40px rgba(58, 69, 82, 0.4);
  border-radius: 1.25rem;
`;

const Title = styled.span`
  ${tw`text-gray-70 font-bold`}
  font-size: 1.125rem;
  line-height: 1.43rem;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.span`
  ${tw`text-gray-60`}
  font-size: 1rem;
  line-height: 1.25rem;
`;

const FolderTitleInput = styled.input`
  ${tw`border border-gray-30 p-4`}
  height: 3.25rem;
  box-sizing: border-box;
  border-radius: 0.625rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;

const ColorList = styled.ul`
  ${tw`flex flex-wrap justify-center`}
  gap: 1rem;
  margin-top: 1rem;

  .folder-item {
    ${tw`flex items-center`}
    min-width: 2.5rem;
    min-height: 2.5rem;
  }
`;

const ButtonGroup = styled.div`
  ${tw`flex justify-end`}
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const ColorItem = (folder, hoveredId, selectedId) => {
  if (folder.folderId === selectedId) return <CircleSelect color={folder.color} />;
  else if (folder.folderId === hoveredId) return <CircleHover color={folder.color} />;

  return <CircleDefault color={folder.color} />;
};

const FolderModal = () => {
  const { handleModal } = useContext(ModalContext);
  const handleClickClose = () => {
    handleModal();
  };
  const [hoveredFolderId, setHoveredFolderId] = useState<string>('');
  const [selectedFolderId, setSelectedFolderId] = useState<string>('');
  const handleMouseEvent = (hoveredId: string) => {
    setHoveredFolderId(hoveredId);
  };
  const handleClick = (selectedId: string) => {
    setSelectedFolderId(selectedId);
  };
  return (
    <Wrapper>
      <Title>새로운 폴더 만들기</Title>
      <SubTitle>폴더명</SubTitle>
      <FolderTitleInput type="text" minLength={1} maxLength={8} placeholder="폴더명을 입력하세요" />
      <SubTitle>폴더 색상</SubTitle>
      <ColorList>
        {FOLDER_COLORS.map((folder: { color: string; folderId: string }) => {
          return (
            <li
              key={folder.folderId}
              onMouseEnter={() => handleMouseEvent(folder.folderId)}
              onMouseLeave={() => handleMouseEvent('')}
              onClick={() => handleClick(folder.folderId)}
              id={folder.folderId}
              className="folder-item"
            >
              {ColorItem(folder, hoveredFolderId, selectedFolderId)}
            </li>
          );
        })}
      </ColorList>
      <ButtonGroup>
        <Button color={'bg-white'} onClick={handleClickClose} minWidth={'3.875rem'}>
          취소
        </Button>
        <Button color={'bg-primary'} onClick={handleClickClose} minWidth={'4.8rem'}>
          <span className="text-white">만들기</span>
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default FolderModal;
