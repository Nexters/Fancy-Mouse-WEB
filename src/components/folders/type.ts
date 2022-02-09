import { Word } from '@/components/words/type';

export interface Folder {
  folderId: number;
  createdAt: string;
  folderName: string;
  color: string;
  wordList: Word[];
}
