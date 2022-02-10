import React, { useContext } from 'react';
import { useWordContext } from '@/contexts/WordContext';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Button from '@/components/buttons/Button';
import { ModalContext } from '@/contexts/ModalContext';

const Wrapper = styled.div`
  width: 100%;
  min-width: 30rem;
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

  .folder {
    ${tw`bg-folder00 rounded-md text-white p-2 items-center`}
    height: 2rem;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    margin-bottom: 1rem;
  }

  .spelling {
    ${tw`text-gray-70 font-bold`}
    font-size: 2rem;
  }

  .created-text {
    ${tw`text-gray-50`}
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }

  .created-date {
    ${tw`text-gray-60`}
    font-size: 0.75rem;
  }
`;

const WordDesc = styled.section`
  ${tw`bg-gray-20 text-gray-60 p-4 flex flex-col`}
  border-radius: 0.3125rem;
  min-height: 5rem;
  max-height: 13.375rem;
  overflow-y: auto;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

const Sentence = styled.section`
  ${tw`bg-gray-20 text-gray-60 p-4 flex flex-col`}
  border-radius: 0.3125rem;
  min-height: 5rem;
  max-height: 13.375rem;
  overflow-y: auto;
  font-size: 1rem;
  line-height: 1.5rem;

  .sentence-title {
    ${tw`text-gray-50`}
    font-size: 0.75rem;
    line-height: 1.5rem;
  }
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
    ${tw`text-gray-50 block`}
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .memo-content {
    ${tw`text-gray-70`}
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
        <span className="folder">{selectedWord?.folderId}</span>
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
      <Sentence>
        <span className="sentence-title">함께 저장한 문장</span>
        문장문장
      </Sentence>
      <Memo>
        <span className="memo-header">내가 남긴 메모</span>
        <span className="memo-content">메모메모</span>
      </Memo>
      <ModalFooter>
        <div css={{ display: 'flex' }}>
          <Button color={'bg-white'} onClick={handleClickDelete} minWidth={'6.1rem'}>
            <span className="text-folder07">삭제하기</span>
          </Button>
          <Button color={'bg-white'} onClick={handleClickDelete} minWidth={'6.1rem'}>
            <span className="text-primary">수정하기</span>
          </Button>
        </div>
        <Button color={'bg-primary'} onClick={handleClickClose} minWidth={'4.8rem'}>
          <span className="text-white">닫기</span>
        </Button>
      </ModalFooter>
    </Wrapper>
  );
};

export default WordModal;
