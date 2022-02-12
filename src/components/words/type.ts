export interface WordModel {
  wordId: number;
  spelling?: string;
  meaning?: string[];
  meaning_en?: string[];
  synonyms?: string[];
  examples?: string[];
  memo?: string;
  createdAt?: string;
  status?: number;
  folderId?: number;
}
