import type { NextPage } from 'next';
import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import Modal from '@/components/modals/Modal';
import WordList from '@/components/words/WordList';
import ListCounter from '@/components/layouts/ListCounter';
import { useQueryClient } from 'react-query';
import { WordModel } from '@/components/words/type';

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const words = queryClient.getQueryData(['words', { folderId: undefined }]) as WordModel[];
  return (
    <>
      <GNB />
      <Modal />
      <Layout>
        <ListCounter count={words?.length} isWord />
        <WordList />
      </Layout>
    </>
  );
};

export default Home;
