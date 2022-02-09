import GNB from '@/components/navigation/GNB';
import WordList from '@/components/words/WordList';
import ListCounter from '@/components/layouts/ListCounter';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Header = styled.section`
  ${tw`flex justify-between items-center text-gray-70 font-bold`}
  height: 2.5rem;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2.5rem;

  .button-wrapper {
    display: inherit;
    gap: 1rem;
    font-size: 1rem;
  }
`;

const FolderDetailPage = () => {
  return (
    <>
      <GNB />
      <Header>
        <span>기본 폴더</span>
        <div className="button-wrapper">
          <button>수정하기</button>
          <button>삭제하기</button>
        </div>
      </Header>
      <ListCounter count={0} isWord />
      <WordList />
    </>
  );
};

export default FolderDetailPage;
