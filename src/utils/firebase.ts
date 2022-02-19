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

export const deleteWord = async (folderId: string, wordId: number) => {
  const db = getDatabase();
  const words = await findWordsByFolderId(folderId);
  if (words) {
    console.log(words);
    const filteredWords = words.filter((item) => {
      console.log(item.wordId);
      console.log(wordId);
      return item.wordId != wordId;
    });
    console.log('걸러진 words');
    console.log(filteredWords);
    set(ref(db, `users/uuid/folders/${folderId}/wordList`), filteredWords);
  }
};
