import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';
import { Word } from './type';
import { MODAL_TYPE } from '@/components/modals/type';
import { ModalContext } from '@/contexts/ModalContext';
import { useWordContext } from '@/contexts/WordContext';

const Wrapper = styled.li`
  background: #ffffff;
  border-radius: 10px;
  width: 19rem;
  min-height: 14rem;
  //min-height: 14rem;
  max-height: 23rem;
  padding-top: 1.875rem;
  padding-bottom: 1rem;

  &:hover {
    box-shadow: 0px 10px 40px rgba(58, 69, 82, 0.1);
    border-radius: 10px;
  }
`;

const WordHeader = styled.span`
  ${tw`flex justify-between px-6 mb-4 text-gray-60`}
  font-size: 0.75rem;
  line-height: 0.9375rem;
`;

const WordSpelling = styled.span`
  ${tw`text-gray-70 font-bold pl-6`}
  font-size: 1.5rem;
  line-height: 1.875rem;
`;

const WordDesc = styled.section`
  ${tw`bg-gray-20 text-gray-60 p-4`}
  border-radius: 0.625rem;
  min-height: 3.5rem;
  max-height: 12.5rem;
  overflow-y: auto;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1.5rem 0.5rem 1rem;
`;

const WordDate = styled.span`
  ${tw`pl-6`}
  line-height: 15px;

  .created-text {
    ${tw`text-gray-40`}
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }

  .created-date {
    font-size: 0.75rem;
  }
`;

const WordItem = ({ word }: { word: Word }) => {
  const { handleModal } = React.useContext(ModalContext);
  const { selectWord, selectedWord } = useWordContext();

  const handleClickWord = async () => {
    selectWord(word);
    if (selectedWord) handleModal(MODAL_TYPE.WORD);
  };

  return (
    <Wrapper onClick={() => handleClickWord()}>
      <WordHeader>{word.folderId}</WordHeader>
      <WordSpelling>{word.spelling}</WordSpelling>
      <WordDesc>{word.meaning}</WordDesc>
      <WordDate>
        <span className="created-text">저장한 일시</span>
        <span className="created-date">{word.createdAt}</span>
      </WordDate>
    </Wrapper>
  );
};

export default WordItem;
