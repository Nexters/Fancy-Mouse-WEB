import { getDatabase, ref, set } from 'firebase/database';
import { FolderModel } from '../components/folders/type';

export const saveFolder = async (folderId: string, folderName: string, color: string) => {
  const db = getDatabase();
  const newFolderId = folderId;
  const folder: FolderModel = {
    folderId: newFolderId,
    createdAt: Date.now(),
    folderName,
    color,
    wordList: [],
  };
  set(ref(db, `users/uuid/folders/${newFolderId}`), folder);
};

export const deleteFolder = async (folderId: string) => {
  const db = getDatabase();
  set(ref(db, `users/uuid/folders/${folderId}`), null);
};
