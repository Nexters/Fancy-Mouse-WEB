import React, { useContext, useState } from 'react';
import { useWordContext } from '@/contexts/WordContext';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import Button from '@/components/buttons/Button';
import { ModalContext } from '@/contexts/ModalContext';
import { BtnEdit, BtnTrash } from '@/assets/icons';
import { deleteWord, updateWordMemo } from '@/utils/firebase';
import dayjs from 'dayjs';
import { useFolderIdFormatter } from '@/hooks/useFolderIdFormatter';
import { useFolderIcon } from '@/hooks/useFolderIcon';

const Wrapper = styled.div`
  width: 30rem;
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
    ${tw`text-gray-60 p-2 items-center flex flex-row`}
    height: 2rem;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    margin-bottom: 1rem;
    gap: 0.25rem;
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

const Memo = styled.section<{ isEditMode: boolean }>`
  ${({ isEditMode }) => (isEditMode ? tw`border border-primary p-4` : tw`border border-gray-30 p-4`)}

  min-height: 5.5rem;
  max-height: 13rem;
  overflow-y: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.625rem;
  line-height: 1.5rem;

  .memo-header {
    ${tw`text-gray-50 block flex justify-between`}
    font-size: 0.75rem;
    margin-bottom: 0.5rem;

    .memo-header-btn {
      ${tw`text-primary`}
      display: inline-flex;
      align-items: center;
      font-size: 0.875rem;
    }
  }

  .memo-content {
    ${tw`text-gray-70 flex`}
    font-size: 1rem;
    width: 100%;
    flex-grow: 1;
    resize: none !important;
  }
`;

const ModalFooter = styled.section`
  ${tw`flex justify-between`}
`;
const WordModal = () => {
  const { selectedWord, setWordMemo } = useWordContext();
  const { handleModal } = useContext(ModalContext);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [memo, setMemo] = useState<string>(selectedWord?.memo ?? '');
  const handleClickDelete = () => {
    deleteWord(selectedWord.folderId, selectedWord.wordId);
  };
  const handleClickEdit = () => {
    setIsEditMode(true);
  };
  const handleClickSave = () => {
    setIsEditMode(false);
    setWordMemo(memo);
    updateWordMemo(selectedWord.folderId, selectedWord.wordId, memo);
  };
  const handleClickClose = () => {
    handleModal();
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };
  return (
    <Wrapper>
      <ModalHeader>
        <span className="folder">
          {useFolderIcon(useFolderIdFormatter(selectedWord?.folderId).color)}
          {useFolderIdFormatter(selectedWord?.folderId).name}
        </span>
        <span className="spelling">{selectedWord?.spelling}</span>
        <p>
          <span className="created-text">저장한 일시</span>
          <span className="created-date">{dayjs(selectedWord?.createdAt).format('YYYY-MM-DD')}</span>
        </p>
      </ModalHeader>
      <WordDesc>{selectedWord?.meaning}</WordDesc>
      <Sentence>
        <span className="sentence-title">함께 저장한 문장</span>
        문장문장
      </Sentence>
      <Memo isEditMode={isEditMode}>
        <span className="memo-header">
          내가 남긴 메모
          {isEditMode ? (
            <button onClick={handleClickSave}>
              <span className="memo-header-btn">저장하기</span>
            </button>
          ) : (
            <button onClick={handleClickEdit}>
              <span className="memo-header-btn">
                <BtnEdit />
                수정하기
              </span>
            </button>
          )}
        </span>
        {isEditMode ? (
          <textarea className="memo-content" maxLength={140} value={memo} onChange={onChangeHandler} />
        ) : (
          <p className="memo-content">{selectedWord?.memo}</p>
        )}
      </Memo>
      <ModalFooter>
        <button onClick={handleClickDelete}>
          <span className="text-folder07 flex items-center">
            <BtnTrash />
            삭제하기
          </span>
        </button>
        <Button color={'bg-primary'} onClick={handleClickClose} minWidth={'4.8rem'}>
          <span className="text-white">닫기</span>
        </Button>
      </ModalFooter>
    </Wrapper>
  );
};

export default WordModal;
