import Fallback from '@/components/fallback';
import Folder from '@/components/folders/Folder';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { FolderModel } from './type';
import { useQueryClient } from 'react-query';

// const saveDummyFolders = async () => {
//   await saveWord('-MwHN41rMks_CFnZmSns', {
//     spelling: 'provide',
//     wordId: 123,
//     meaning: ['제공하다', '주다'],
//     synonyms: ['hide', 'hat', 'face', 'veil', 'disguise', 'camouflage'],
//     examples: [
//       'In the meantime, the province magistrate provided supplies to the British.',
//       'But mostly the point was to give pleasure and provide finality.',
//     ],
//     memo: '테스트 메모',
//     createdAt: Date.now(),
//     folderId: '-MwHN41rMks_CFnZmSns',
//   });
// };

const FolderListWrapper = styled.ul`
  ${tw`flex flex-col`}
  gap: 1.5rem;
  width: 60rem;
  margin-top: 1.5rem;
`;

const FolderList = () => {
  const queryClient = useQueryClient();
  const folders = queryClient.getQueryData('folders') as FolderModel[];
  return folders?.length ? (
    <FolderListWrapper>
      {folders?.map((d) => (
        <Folder key={d.folderId} folder={d} />
      ))}
    </FolderListWrapper>
  ) : (
    <Fallback isWord={false} />
  );
};

export default FolderList;
