import type { NextPage } from 'next';
import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import WordList from '@/components/words/WordList';
import Button from '@/components/buttons/Button';
import Modal from '@/components/modals/Modal';

const Home: NextPage = () => {
  return (
    <>
      <GNB />
      <Modal />
      <Layout>{/*<WordList />*/}</Layout>
    </>
  );
};

export default Home;
