import Fallback from '@/components/fallback';
import Word from '@/components/words/Word';
import styled from '@emotion/styled';
import { findAllWords, findWordsByFolderId } from '@/utils/firebase';
import { WordModel } from './type';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const WordListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, auto));
  gap: 1.5rem;
  justify-items: center;
  margin-top: 1.5rem;
  padding-bottom: 1.25rem;
`;

const WordList = () => {
  const router = useRouter();
  const fetchData = async () => {
    let data: WordModel[] = [];
    if (router.query.folderId) {
      data = await findWordsByFolderId(router.query.folderId as string);
    } else {
      data = await findAllWords();
    }
    return data;
  };
  const { isLoading, data } = useQuery(['words', { folderId: router.query.folderId }], fetchData);

  // useEffect(() => {
  //   if (!router.isReady) return;
  // }, [router.isReady]);

  if (isLoading) {
    return <></>;
  }

  return data?.length ? (
    <WordListWrapper>
      {data?.map((d) => (
        <Word key={d.wordId} word={d} />
      ))}
    </WordListWrapper>
  ) : (
    <Fallback isWord />
  );
};

export default WordList;
