import { WordModel } from '@/components/words/type';

export interface FolderModel {
  folderId: number;
  createdAt: string;
  folderName: string;
  color: string;
  wordList: WordModel[];
}
