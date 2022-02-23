import type { NextPage } from 'next';
import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import Modal from '@/components/modals/Modal';
import WordList from '@/components/words/WordList';
import ListCounter from '@/components/layouts/ListCounter';
import { useQuery } from 'react-query';
import { WordModel } from '@/components/words/type';
import styled from '@emotion/styled';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { findAllWords } from '@/utils/firebase';

const Wrapper = styled.div`
  background: #eef1f4;
  max-width: 960px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  const fetchData = async (): Promise<WordModel[]> => {
    return await findAllWords();
  };

  const { data } = useQuery(['words', { folderId: undefined }], fetchData);
  const { userInfo } = useContext(AuthContext);
  return (
    <Wrapper>
      <GNB userInfo={userInfo} />
      <Modal />
      <Layout>
        <ListCounter count={data?.length ?? 0} isWord />
        <WordList />
      </Layout>
    </Wrapper>
  );
};

export default Home;
