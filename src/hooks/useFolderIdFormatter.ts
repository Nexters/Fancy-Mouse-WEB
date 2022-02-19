import { useQuery } from 'react-query';
import { findAllFolders } from '@/utils/firebase';

export const useFolderIdFormatter = (folderId: string) => {
  const fetchData = async () => {
    return await findAllFolders();
  };
  const { isLoading, data } = useQuery('folders', fetchData);

  if (isLoading) return { name: 'loading', color: 'loading' };

  if (!isLoading) {
    const targetFolder = data?.find((folder) => folder.folderId === folderId);
    return {
      name: targetFolder?.folderName,
      color: targetFolder?.color,
    };
  } else {
    return {
      name: '',
      color: '',
    };
  }
};
