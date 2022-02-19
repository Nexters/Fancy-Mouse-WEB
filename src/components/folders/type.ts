import { WordModel } from '@/components/words/type';

export interface FolderModel {
  folderId: string;
  createdAt: string;
  folderName: string;
  color: string;
  wordList: WordModel[];
}
