import type { NextPage } from 'next';
import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import WordList from '@/components/words/WordList';

const Home: NextPage = () => {
  return (
    <div>
      <GNB />
      <Layout>
        <WordList />
      </Layout>
    </div>
  );
};

export default Home;
