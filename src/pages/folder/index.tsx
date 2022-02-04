import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import ListCounter from '@/components/layouts/ListCounter';

const FolderListPage = () => {
  return (
    <div>
      <GNB />
      <Layout>
        <ListCounter count={0} isWord={false} />
        폴더
      </Layout>
    </div>
  );
};

export default FolderListPage;
