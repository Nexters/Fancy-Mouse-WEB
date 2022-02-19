import Fallback from '@/components/fallback';
import Word from '@/components/words/Word';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { findAllWords, findWordsByFolderId } from '../../utils/firebase';
import { WordModel } from './type';

const WordListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, auto));
  gap: 1.5rem;
  justify-items: center;
  margin-top: 1.5rem;
  padding-bottom: 1.25rem;
`;

const WordList = () => {
  const [wordList, setWordList] = useState<WordModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // TODO : fodlerId 받아오기
      await findAllWords();
      const data = await findWordsByFolderId('folder01');
      setWordList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return wordList.length ? (
    <WordListWrapper>
      {wordList.map((d) => (
        <Word key={d.wordId} word={d} />
      ))}
    </WordListWrapper>
  ) : (
    <Fallback isWord />
  );
};
export default WordList;
