export interface WordModel {
  wordId: string;
  spelling: string;
  meaning?: string[];
  synonyms?: string[];
  pronounce?: string;
  example?: string;
  memo?: string;
  createdAt: number;
  folderId: string;
}
