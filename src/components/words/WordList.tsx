import Fallback from '@/components/fallback';
import Word from '@/components/words/Word';
import styled from '@emotion/styled';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { useEffect, useState } from 'react';
import { WordModel } from './type';

// TODO : 나중에 지우기
const saveWords = async () => {
  const db = getDatabase();
  set(ref(db, 'users/uid/folders'), {
    words: [
      {
        spelling: 'provide',
        wordId: 123,
        meaning_en: [
          '(vrb) give something useful or necessary to',
          '(vrb) give what is desired or needed, especially support, food or sustenance',
        ],
        meaning: ['제공하다', '주다'],
        synonyms: ['hide', 'hat', 'face', 'veil', 'disguise', 'camouflage'],
        examples: [
          'In the meantime, the province magistrate provided supplies to the British.',
          'But mostly the point was to give pleasure and provide finality.',
        ],
        memo: '테스트 메모',
        createdAt: '2022-02-01T12:23:45',
        status: 3,
        folderId: 12,
      },
      {
        wordId: 333,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        meaning_en: [
          '(vrb) make legal',
          '(vrb) make (an illegitimate child) legitimate; declare the legitimacy of (someone)',
          '(adj) of marriages and offspring; recognized as lawful',
        ],
        synonyms: ['appropriate', 'just', 'valid', 'logical', 'rational', 'lawful'],
        examples: [
          'In the meantime, the province magistrate provided supplies to the British.',
          'But mostly the point was to give pleasure and provide finality.',
        ],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 1232,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 1442,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 2442,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 1343,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 13222,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 142342342,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 3메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 14234242,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
      {
        wordId: 144222,
        spelling: 'legitimate',
        meaning: ['정당한', '타당한', '적당한'],
        memo: '테스트 메모222',
        createdAt: '2022-02-02T11:23:45',
        status: 1,
        folderId: 14,
      },
    ],
  });
};

const findWords = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uid/folders/words`));
  if (snapshot.exists()) {
    return snapshot.val();
  }
};

const WordListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, auto));
  gap: 1.5rem;
  justify-items: center;
  margin-top: 1.5rem;
  padding-bottom: 1.25rem;
`;

const getWordList = async () => {
  await saveWords();
  const wordList = await findWords();
  return wordList;
};

const WordList = () => {
  const [wordList, setWordList] = useState<WordModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getWordList();
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
