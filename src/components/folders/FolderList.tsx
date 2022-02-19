import Fallback from '@/components/fallback';
import Folder from '@/components/folders/Folder';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { findAllFolders, saveWord } from '@/utils/firebase';
import { FolderModel } from './type';
import { useQuery } from 'react-query';

const saveDummyFolders = async () => {
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
  const fetchData = async () => {
    const data: FolderModel[] = await findAllFolders();
    return data;
  };

  const { isLoading, data } = useQuery('folders', fetchData);

  if (isLoading) {
    return <></>;
  }

  return data?.length ? (
    <FolderListWrapper>
      {data?.map((d) => (
        <Folder key={d.folderId} folder={d} />
      ))}
    </FolderListWrapper>
  ) : (
    <Fallback isWord={false} />
  );
};

export default FolderList;
