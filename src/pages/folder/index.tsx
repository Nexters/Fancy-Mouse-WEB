import GNB from '@/components/navigation/GNB';
import Layout from '@/components/layouts';
import ListCounter from '@/components/layouts/ListCounter';
import FolderList from '@/components/folders/FolderList';

const FolderListPage = () => {
  return (
    <div>
      <GNB />
      <Layout>
        <ListCounter count={0} isWord={false} />
        <FolderList />
      </Layout>
    </div>
  );
};

export default FolderListPage;
