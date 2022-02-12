import Fallback from '@/components/fallback';
import styled from '@emotion/styled';
import Folder from '@/components/folders/Folder';
import tw from 'twin.macro';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';

const saveFolders = async () => {
  const db = getDatabase();
  set(ref(db, 'userId/folders'), {
    data: [
      {
        folderId: 1,
        createdAt: '2022-02-01T12:23:45',
        folderName: '테스트 폴더더더더',
        color: 'folder00',
        wordList: [
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
        ],
      },
      {
        folderId: 2,
        createdAt: '2022-02-01T12:23:45',
        folderName: '폴더22',
        color: 'folder01',
        wordList: [
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
        ],
      },
    ],
  });
};

const findFolders = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `userId/folders`));
  if (snapshot.exists()) {
    return snapshot.val();
  }
};

const getFolderList = async () => {
  await saveFolders();
  const temp = await findFolders();
  const folderList = temp.data;
  return folderList;
};

const FolderListWrapper = styled.ul`
  ${tw`flex flex-col`}
  gap: 1.5rem;
  width: 60rem;
  margin-top: 1.5rem;
`;

const FolderList = () => {
  const [folderList, setFolderList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getFolderList();
      setFolderList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return folderList.length ? (
    <FolderListWrapper>
      {folderList.map((d) => (
        <Folder key={d.folderId} folder={d} />
      ))}
    </FolderListWrapper>
  ) : (
    <Fallback isWord={false} />
  );
};

export default FolderList;
