import type { NextPage } from 'next';
import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import Modal from '@/components/modals/Modal';
import WordList from '@/components/words/WordList';
import ListCounter from '@/components/layouts/ListCounter';

const Home: NextPage = () => {
  return (
    <>
      <GNB />
      <Modal />
      <Layout>
        <ListCounter count={0} isWord />
        <WordList />
      </Layout>
    </>
  );
};

export default Home;
