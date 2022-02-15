import React, { createContext, ReactNode, useContext } from 'react';
import { WordModel } from '@/components/words/type';

interface WordContextState {
  selectedWord: WordModel | null;
  selectWord: (word: WordModel) => void;
  setWordMemo: (memo: string) => void;
}

export const WordContext = createContext<WordContextState>({} as WordContextState);

export const WordProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWord, setSelectedWord] = React.useState<WordModel | null>(null);

  const selectWord = (word: WordModel) => {
    setSelectedWord(word);
  };

  const setWordMemo = (memo: string) => {
    if (selectedWord) {
      selectedWord.memo = memo;
    }
  };

  return <WordContext.Provider value={{ selectedWord, selectWord, setWordMemo }}>{children}</WordContext.Provider>;
};

export const useWordContext = () => {
  const context = useContext(WordContext);
  if (!context || context === ({} as WordContextState)) {
    throw new Error('You need to wrap WordProvider');
  }
  return context;
};
