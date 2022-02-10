import React, { useContext } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Button from '@/components/buttons/Button';
import { ModalContext } from '@/contexts/ModalContext';

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

const FolderColors = [
  'folder01',
  'folder02',
  'folder03',
  'folder04',
  'folder05',
  'folder06',
  'folder07',
  'folder08',
  'folder09',
  'folder10',
  'folder11',
  'folder00',
];

const ColorList = styled.div`
  ${tw`flex flex-wrap`}
  gap: 1.25rem;
  margin-top: 1rem;
`;

const ButtonGroup = styled.div`
  ${tw`flex justify-end`}
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const FolderModal = () => {
  const { handleModal } = useContext(ModalContext);
  const handleClickClose = () => {
    handleModal();
  };
  return (
    <Wrapper>
      <Title>새로운 폴더 만들기</Title>
      <SubTitle>폴더명</SubTitle>
      <FolderTitleInput type="text" minLength={1} maxLength={8} placeholder="폴더명을 입력하세요" />
      <SubTitle>폴더 색상</SubTitle>
      <ColorList>
        {FolderColors.map((color) => {
          return <span className={`bg-${color} rounded-full w-10 h-10`} key={color} />;
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
