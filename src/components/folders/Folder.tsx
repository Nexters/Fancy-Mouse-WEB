import { Folder } from './type';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { useRouter } from 'next/router';

const Wrapper = styled.li`
  ${tw`bg-white/20 p-10 text-gray-70 font-bold`}
  border: 1px solid white;
  border-radius: 1.25rem;
  height: 7rem;
  font-size: 1.5rem;
  line-height: 1.875rem;

  &:hover {
    ${tw`bg-white`}
    box-shadow: 0px 10px 40px rgba(77, 98, 125, 0.15);
    border-radius: 20px;
  }
`;

const FolderItem = ({ folder }: { folder: Folder }) => {
  const router = useRouter();
  const handleClickFolder = () => {
    router.push({
      pathname: '/folder/[folderId]',
      query: { folderId: folder.folderId },
    });
  };
  return <Wrapper onClick={() => handleClickFolder()}>{folder.folderName}</Wrapper>;
};

export default FolderItem;
