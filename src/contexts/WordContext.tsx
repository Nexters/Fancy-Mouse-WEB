import React, { createContext, ReactNode, useContext } from 'react';
import { Word } from '@/components/words/type';

interface WordContextState {
  selectedWord: Word | null;
  selectWord: (word: Word) => void;
}

export const WordContext = createContext<WordContextState>({} as WordContextState);

export const WordProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWord, setSelectedWord] = React.useState<Word | null>(null);

  const selectWord = (word: Word) => {
    setSelectedWord(word);
  };

  return <WordContext.Provider value={{ selectedWord, selectWord }}>{children}</WordContext.Provider>;
};

export const useWordContext = () => {
  const context = useContext(WordContext);
  if (!context || context === ({} as WordContextState)) {
    throw new Error('You need to wrap WordProvider');
  }
  return context;
};
