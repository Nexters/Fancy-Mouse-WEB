import Fallback from '@/components/fallback';
import Word from '@/components/words/Word';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { findAllWords, findWordsByFolderId } from '@/utils/firebase';
import { WordModel } from './type';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const fetchData = async () => {
    let data: WordModel[] = [];
    if (router.query.folderId) {
      data = await findWordsByFolderId(router.query.folderId as string);
    } else {
      data = await findAllWords();
    }
    setWordList(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!router.isReady) return;
    setLoading(true);
    fetchData();
  }, [router.isReady]);

  if (loading) {
    return <></>;
  }

  return wordList?.length ? (
    <WordListWrapper>
      {wordList?.map((d) => (
        <Word key={d.wordId} word={d} />
      ))}
    </WordListWrapper>
  ) : (
    <Fallback isWord />
  );
};
export default WordList;
