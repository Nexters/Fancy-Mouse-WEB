import { child, get, getDatabase, ref, set } from 'firebase/database';
import { FolderModel } from '../components/folders/type';
import { WordModel } from '../components/words/type';

export const findAllFolders = async (): Promise<FolderModel[]> => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders`));
  if (snapshot.exists()) {
    return Object.values(snapshot.val()) as FolderModel[];
  }
  return [];
};

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

export const findWordsByFolderId = async (folderId: string) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders/${folderId}`));
  if (snapshot.exists()) {
    return snapshot.val().wordList;
  }
};

export const findAllWords = async () => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/uuid/folders`));
  if (snapshot.exists()) {
    const folders = Object.values(snapshot.val());
    let words = [];
    for (const folder of folders) {
      words.push(...folder.wordList);
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
  if (words) {
    const updatedWords = words.map((word) => {
      if (word.wordId === wordId) {
        word.memo = memo;
      }
    });
    set(ref(db, `users/uuid/folders/${folderId}/wordList`), updatedWords);
  }
  return;
};

export const deleteWord = async (folderId: string, wordId: number) => {
  const db = getDatabase();
  const words = await findWordsByFolderId(folderId);
  if (words) {
    const filteredWords = words.filter((item) => {
      return item.wordId != wordId;
    });
    set(ref(db, `users/uuid/folders/${folderId}/wordList`), filteredWords);
  }
};
