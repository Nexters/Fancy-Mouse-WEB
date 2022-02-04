import Fallback from '@/components/fallback';

const word = [
  { name: 'word1', content: 'word1 content' },
  { name: 'word2', content: 'word2 content' },
];
const WordList = () => {
  return word.length === 0 ? <>WordList</> : <Fallback isWord />;
};

export default WordList;
