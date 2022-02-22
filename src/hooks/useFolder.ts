import { useQuery } from 'react-query';
import { findAllFolders } from '@/utils/firebase';

export const useFolder = (folderId) => {
  const fetchData = async () => {
    return await findAllFolders();
  };
  const { isLoading, data } = useQuery('folders', fetchData);

  if (isLoading) return { name: 'loading', color: 'loading' };

  if (!isLoading) {
    const targetFolder = data?.find((folder) => folder.folderId === folderId);
    return {
      folderName: targetFolder?.folderName,
      color: targetFolder?.color,
      createdAt: targetFolder?.createdAt,
      wordList: targetFolder?.wordList,
      folderId: targetFolder?.folderId,
    };
  } else {
    return {
      folderName: '',
      color: '',
      createdAt: '',
      wordList: [],
      folderId: '',
    };
  }
};
