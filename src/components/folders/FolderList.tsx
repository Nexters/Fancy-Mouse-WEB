import Fallback from '@/components/fallback';
import Folder from '@/components/folders/Folder';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { findAllFolders, saveFolder, saveWord } from '../../utils/firebase';
import { FolderModel } from './type';

const saveDummyFolders = async () => {
  await saveFolder('folder01', '폴더1', 'folder01');
  await saveFolder('folder02', '폴더2', 'folder02');
  await saveWord('folder01', {
    spelling: 'provide',
    wordId: 123,
    meaning: ['제공하다', '주다'],
    synonyms: ['hide', 'hat', 'face', 'veil', 'disguise', 'camouflage'],
    examples: [
      'In the meantime, the province magistrate provided supplies to the British.',
      'But mostly the point was to give pleasure and provide finality.',
    ],
    memo: '테스트 메모',
    createdAt: Date.now(),
    folderId: 'folder01',
  });
  await saveWord('folder01', {
    wordId: 333,
    spelling: 'legitimate',
    meaning: ['정당한', '타당한', '적당한'],
    synonyms: ['appropriate', 'just', 'valid', 'logical', 'rational', 'lawful'],
    examples: [
      'In the meantime, the province magistrate provided supplies to the British.',
      'But mostly the point was to give pleasure and provide finality.',
    ],
    memo: '테스트 메모222',
    createdAt: Date.now(),
    folderId: 'folder01',
  });
  await saveWord('folder01', {
    wordId: 334,
    spelling: 'legitimate',
    meaning: ['정당한', '타당한', '적당한'],
    synonyms: ['appropriate', 'just', 'valid', 'logical', 'rational', 'lawful'],
    examples: [
      'In the meantime, the province magistrate provided supplies to the British.',
      'But mostly the point was to give pleasure and provide finality.',
    ],
    memo: '테스트 메모222',
    createdAt: Date.now(),
    folderId: 'folder01',
  });
  await saveWord('folder02', {
    spelling: 'provide',
    wordId: 1234,
    meaning: ['제공하다', '주다'],
    synonyms: ['hide', 'hat', 'face', 'veil', 'disguise', 'camouflage'],
    examples: [
      'In the meantime, the province magistrate provided supplies to the British.',
      'But mostly the point was to give pleasure and provide finality.',
    ],
    memo: '테스트 메모',
    createdAt: Date.now(),
    folderId: 'folder02',
  });
  await saveWord('folder02', {
    wordId: 3335,
    spelling: 'legitimate',
    meaning: ['정당한', '타당한', '적당한'],
    synonyms: ['appropriate', 'just', 'valid', 'logical', 'rational', 'lawful'],
    examples: [
      'In the meantime, the province magistrate provided supplies to the British.',
      'But mostly the point was to give pleasure and provide finality.',
    ],
    memo: '테스트 메모222',
    createdAt: Date.now(),
    folderId: 'folder02',
  });
};

const FolderListWrapper = styled.ul`
  ${tw`flex flex-col`}
  gap: 1.5rem;
  width: 60rem;
  margin-top: 1.5rem;
`;

const FolderList = () => {
  const [folderList, setFolderList] = useState<FolderModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await saveDummyFolders();
      const data = await findAllFolders();
      setFolderList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return folderList?.length ? (
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
