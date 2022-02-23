import { child, get, getDatabase, push, ref, set } from 'firebase/database';
import { FolderModel } from '@/components/folders/type';
import { WordModel } from '@/components/words/type';

export const findAllFolders = async (): Promise<FolderModel[]> => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders`));
  if (snapshot.exists()) {
    return Object.values(snapshot.val()) as FolderModel[];
  }
  return [];
};

export const findFolderById = async (folderId: string) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders/${folderId}`));
  if (snapshot.exists()) {
    return snapshot.val();
  }
};

export const saveFolder = async (folderName: string, color: string) => {
  const db = getDatabase();
  const newFolderId = push(child(ref(db), 'users/uuid/folders')).key;
  const folder: FolderModel = {
    folderId: newFolderId as string,
    createdAt: Date.now(),
    folderName,
    color,
    wordList: [],
  };
  await set(ref(db, `users/uuid/folders/${newFolderId}`), folder);
};

export const updateFolderNameAndFolderColor = async (folderId: string, folderName: string, color: string) => {
  const db = getDatabase();
  const folder = await findFolderById(folderId);
  if (folder) {
    folder.folderName = folderName;
    folder.color = color;
    await set(ref(db, `users/uuid/folders/${folderId}`), folder);
  }
};

export const deleteFolder = async (folderId: string) => {
  const db = getDatabase();
  await set(ref(db, `users/uuid/folders/${folderId}`), null);
};

export const findWordsByFolderId = async (folderId: string) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders/${folderId}`));
  if (snapshot.exists()) {
    return snapshot.val().wordList;
  }
};

export const findAllWords = async (): Promise<WordModel[]> => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders`));
  if (snapshot.exists()) {
    const folders: FolderModel[] = Object.values(snapshot.val());
    const words: WordModel[] = [];
    for (const folder of folders) {
      if (folder.wordList) {
        words.push(...folder.wordList);
      }
    }
    words.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });
    return words;
  }
  return [];
};

export const saveWord = async (folderId: string, word: WordModel) => {
  const db = getDatabase();
  let words = await findWordsByFolderId(folderId);

  if (words) {
    words.push(word);
  } else {
    words = [word];
  }
  set(ref(db, `users/uuid/folders/${folderId}/wordList`), words);
};

export const updateWordMemo = async (folderId: string, wordId: number, memo: string) => {
  const db = getDatabase();
  const words = await findWordsByFolderId(folderId);
  if (!words) return;
  const updatedWords = words.map((word) => {
    if (word.wordId === wordId) word.memo = memo;
    return word;
  });
  await set(ref(db, `users/uuid/folders/${folderId}/wordList`), updatedWords);
};

export const deleteWord = async (folderId: string, wordId: number) => {
  const db = getDatabase();
  const words = await findWordsByFolderId(folderId);
  if (!words) return;
  const filteredWords = words.filter((item) => {
    return item.wordId != wordId;
  });
  await set(ref(db, `users/uuid/folders/${folderId}/wordList`), filteredWords);
};
