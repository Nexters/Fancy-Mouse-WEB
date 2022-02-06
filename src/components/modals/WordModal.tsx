import React, { useContext } from 'react';
import { useWordContext } from '@/contexts/WordContext';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Button from '@/components/buttons/Button';
import { ModalContext } from '@/contexts/ModalContext';

const Wrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  min-height: 27rem;
  padding: 2rem 1rem 1rem;
  box-shadow: 0px 10px 40px rgba(58, 69, 82, 0.4);
`;

const ModalHeader = styled.section`
  ${tw`flex flex-col`}
  height: 8.375rem;
  margin-bottom: 1rem;
  line-height: 2.5rem;
  padding-left: 0.5rem;

  .spelling {
    ${tw`text-gray-70 font-bold`}
    font-size: 2rem;
  }

  .created-text {
    ${tw`text-gray-40`}
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }

  .created-date {
    ${tw`text-gray-50`}
    font-size: 0.75rem;
  }
`;

const WordDesc = styled.section`
  ${tw`bg-gray-20 text-gray-60 p-4`}
  border-radius: 0.3125rem;
  min-height: 5rem;
  max-height: 13.375rem;
  overflow-y: auto;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Memo = styled.section`
  ${tw`border border-gray-30 p-4`}
  min-height: 5.5rem;
  max-height: 13rem;
  overflow-y: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  line-height: 1.5rem;

  .memo-header {
    ${tw`text-gray-40 block`}
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .memo-content {
    ${tw`text-gray-60`}
    font-size: 1rem;
  }
`;

const ModalFooter = styled.section`
  ${tw`flex justify-between`}
`;
const WordModal = () => {
  const { selectedWord } = useWordContext();
  const { handleModal } = useContext(ModalContext);
  const handleClickDelete = () => {
    console.log('delete');
  };
  const handleClickClose = () => {
    handleModal();
  };
  return (
    <Wrapper>
      <ModalHeader>
        <span>{selectedWord?.folderId}</span>
        <span className="spelling">{selectedWord?.spelling}</span>
        <p>
          <span className="created-text">저장한 일시</span>
          <span className="created-date">{selectedWord?.createdAt}</span>
        </p>
      </ModalHeader>
      <WordDesc>
        {selectedWord?.meaning}
        {selectedWord?.meaning_en}
      </WordDesc>
      <Memo>
        <span className="memo-header">내가 남긴 메모</span>
        <span className="memo-content">메모메모</span>
      </Memo>
      <ModalFooter>
        <div>
          <Button color={'bg-white'} onClick={handleClickDelete} minWidth={'5.6rem'}>
            <span className="text-gray-50">삭제하기</span>
          </Button>
        </div>
        <div css={{ display: 'flex', gap: '1rem' }}>
          <Button color={'bg-gray-20'} onClick={handleClickDelete} minWidth={'5.6rem'}>
            <span className="text-gray-50">수정하기</span>
          </Button>
          <Button color={'bg-primary'} onClick={handleClickClose} minWidth={'3.8rem'}>
            <span className="text-white">닫기</span>
          </Button>
        </div>
      </ModalFooter>
    </Wrapper>
  );
};

export default WordModal;
