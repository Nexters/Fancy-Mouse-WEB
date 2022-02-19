export interface WordModel {
  wordId: number;
  spelling?: string;
  meaning?: string[];
  synonyms?: string[];
  examples?: string[];
  memo?: string;
  createdAt?: number;
  folderId: string;
}
