import type { NextPage } from 'next';
import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import WordList from '@/components/words/WordList';

const Home: NextPage = () => {
  return (
    <>
      <GNB />
      <Layout>
        <WordList />
      </Layout>
    </>
  );
};

export default Home;
