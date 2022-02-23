import CircleSelect from '@/assets/icons/IcCircleCheck';
import CircleDefault from '@/assets/icons/IcCircleDefault';
import CircleHover from '@/assets/icons/IcCircleHover';
import Button from '@/components/buttons/Button';
import { FolderModel } from '@/components/folders/type';
import { FOLDER_COLORS } from '@/components/modals/constants';
import { FolderContext } from '@/contexts/FolderContext';
import { ModalContext } from '@/contexts/ModalContext';
import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import tw from 'twin.macro';
import { saveFolder, updateFolderNameAndFolderColor } from '@/utils/firebase';
import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import toast from '@/components/toast';

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
`;

const ButtonGroup = styled.div`
  ${tw`flex justify-end`}
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const ColorItem = styled.span`
  display: flex;
  min-width: 2.5rem;
  min-height: 2.5rem;
  align-items: center;
`;

const getColor = (folder, hoveredId, selectedId) => {
  if (folder.colorId === selectedId) return <CircleSelect color={folder.color} />;
  else if (folder.colorId === hoveredId) return <CircleHover color={folder.color} />;

  return <CircleDefault color={folder.color} />;
};

const FolderModal = () => {
  const { handleModal } = useContext(ModalContext);
  const { selectFolder, selectedFolder, setFolderName, setFolderColor } = useContext(FolderContext);
  const queryClient = useQueryClient();
  const router = useRouter();

  const createFolder = () => {
    return saveFolder(selectedFolder.folderName, selectedFolder.color);
  };

  const updateFolder = () => {
    return updateFolderNameAndFolderColor(
      selectedFolder.folderId as string,
      selectedFolder.folderName,
      selectedFolder.color,
    );
  };

  const createMutation = useMutation(createFolder, {
    onSuccess: () => {
      handleModal();
      toast('새로운 폴더를 만들었어요!', { delay: 3000, isAlert: false });
      selectFolder({} as FolderModel);
      return queryClient.invalidateQueries('folders');
    },
  });

  const updateMutation = useMutation(updateFolder, {
    onSuccess: () => {
      handleModal();
      toast('수정한 내용이 저장되었어요!', { delay: 3000, isAlert: false });
      if (router.query?.folderId === undefined) selectFolder({} as FolderModel);

      return queryClient.invalidateQueries('folders');
    },
  });

  const handleClickClose = () => {
    handleModal();
    selectFolder({} as FolderModel);
  };
  const [hoveredColorId, setHoveredColorId] = useState<string>('');
  const [selectedColorId, setSelectedColorId] = useState<string>('');

  const handleTitleInput = (e) => {
    setFolderName(e.target.value);
  };

  const handleMouseEvent = (hoveredId: string) => {
    setHoveredColorId(hoveredId);
  };
  const handleClick = (selectedId: string) => {
    setSelectedColorId(selectedId);
    setFolderColor(selectedId);
  };

  const handleClickSave = () => {
    createMutation.mutate();
  };

  const handleClickEdit = () => {
    updateMutation.mutate();
  };

  useEffect(() => {
    if (selectedFolder) setSelectedColorId(selectedFolder.color);
  }, [selectedFolder]);

  return (
    <Wrapper>
      <Title>새로운 폴더 만들기</Title>
      <SubTitle>폴더명</SubTitle>
      <FolderTitleInput
        type="text"
        value={selectedFolder.folderName ?? ''}
        onChange={handleTitleInput}
        minLength={1}
        maxLength={8}
        placeholder="폴더명을 입력하세요"
      />
      <SubTitle>폴더 색상</SubTitle>
      <ColorList>
        {FOLDER_COLORS.map((color: { color: string; colorId: string }) => {
          return (
            <li
              key={color.colorId}
              onMouseEnter={() => handleMouseEvent(color.colorId)}
              onMouseLeave={() => handleMouseEvent('')}
              onClick={() => handleClick(color.colorId)}
              id={color.colorId}
              className="folder-item"
            >
              <ColorItem>{getColor(color, hoveredColorId, selectedColorId)}</ColorItem>
            </li>
          );
        })}
      </ColorList>
      <ButtonGroup>
        <Button color={'bg-white'} onClick={handleClickClose} minWidth={'3.875rem'}>
          취소
        </Button>
        {selectedFolder.folderId ? (
          <Button color={'bg-primary'} onClick={handleClickEdit} minWidth={'4.8rem'}>
            <span className="text-secondary">수정 완료</span>
          </Button>
        ) : (
          <Button color={'bg-primary'} onClick={handleClickSave} minWidth={'4.8rem'}>
            <span className="text-secondary">만들기</span>
          </Button>
        )}
      </ButtonGroup>
    </Wrapper>
  );
};

export default FolderModal;
