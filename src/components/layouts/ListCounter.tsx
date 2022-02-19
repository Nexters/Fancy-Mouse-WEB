import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props {
  count: number;
  isWord: boolean;
}

const Wrapper = styled.span`
  ${tw`text-gray-50`}
  color: #a1abb5;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const ListCounter = ({ count, isWord }: Props) => {
  return (
    <>
      <Wrapper>
        총 <span className="font-bold text-primary">{count}개</span>
        {isWord ? ' 단어' : ' 폴더'}가 있어요.
      </Wrapper>
    </>
  );
};

export default ListCounter;
