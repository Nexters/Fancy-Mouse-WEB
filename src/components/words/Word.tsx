import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';
import { WordModel } from './type';
import { MODAL_TYPE } from '@/components/modals/type';
import { ModalContext } from '@/contexts/ModalContext';
import { useWordContext } from '@/contexts/WordContext';
import dayjs from 'dayjs';
import { useFolderIdFormatter } from '@/hooks/useFolderIdFormatter';
import { useFolderIcon } from '@/hooks/useFolderIcon';

const Wrapper = styled.li`
  ${tw`bg-white/40`}
  border: 1px solid white;
  border-radius: 1.25rem;
  width: 19rem;
  //min-height: 14rem;
  //max-height: 20rem;
  height: 18.4375rem;

  &:hover {
    ${tw`bg-white`}
    box-shadow: 0px 10px 40px rgba(77, 98, 125, 0.2);
    border-radius: 20px;
  }
`;

const WordHeader = styled.span`
  ${tw`flex text-gray-60 items-center`}
  font-size: 0.75rem;
  border-radius: 0.5rem;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  gap: 0.25rem;
`;

const WordSpelling = styled.span`
  ${tw`text-gray-70 font-bold pl-6`}
  font-size: 1.5rem;
  line-height: 1.875rem;
`;

const WordDesc = styled.section`
  ${tw`bg-gray-20 text-gray-60 p-4 my-4 mx-2`}
  border-radius: 0.625rem;
  max-height: 9.5rem;
  //min-height: 3.5rem;
  //max-height: 12.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  overflow: hidden;

  .meaning {
    ${tw`text-gray-70`}
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .desc-title {
    font-size: 0.75rem;
    margin-right: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;

const WordDate = styled.span`
  ${tw`pl-6`}
  line-height: 0.9375rem;

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

const WordItem = ({ word }: { word: WordModel }) => {
  const { handleModal } = React.useContext(ModalContext);
  const { selectWord, selectedWord } = useWordContext();

  const handleClickWord = async () => {
    selectWord(word);
    if (selectedWord) handleModal(MODAL_TYPE.WORD);
  };

  return (
    <Wrapper onClick={() => handleClickWord()}>
      <WordHeader>
        {useFolderIcon(useFolderIdFormatter(word.folderId).color)}
        {useFolderIdFormatter(word.folderId).name}
      </WordHeader>
      <WordSpelling>{word.spelling}</WordSpelling>
      <WordDesc>
        <p className="meaning">{word.meaning?.join(', ')}</p>
        <p>
          <span className="desc-title text-folder02">??????</span>
          {word.pronounce}
        </p>
        <p>
          <span className="desc-title text-folder03">??????</span>
          {word.example}
        </p>
        <p>
          <span className="desc-title text-folder04">?????????</span>
          {word.synonyms?.join(', ')}
        </p>
      </WordDesc>
      <WordDate>
        <span className="created-text">????????? ??????</span>
        <span className="created-date">{dayjs.unix(word.createdAt).format('YYYY-MM-DD')}</span>
      </WordDate>
    </Wrapper>
  );
};

export default WordItem;
