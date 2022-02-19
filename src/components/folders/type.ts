import { WordModel } from '@/components/words/type';

export interface FolderModel {
  folderId: string;
  createdAt: number;
  folderName: string;
  color: string;
  wordList: WordModel[];
}
