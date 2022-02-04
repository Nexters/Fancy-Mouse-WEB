import styled from '@emotion/styled';

interface Props {
  count: number;
  isWord: boolean;
}

const Wrapper = styled.span`
  margin-bottom: 1.5rem;
  color: #a1abb5;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

const ListCounter = ({ count, isWord }: Props) => {
  return (
    <>
      <Wrapper>
        총 <span css={{ fontWeight: 'bold', color: '#687280' }}>{count}개</span>
        {isWord ? ' 단어' : ' 폴더'}가 있어요.
      </Wrapper>
    </>
  );
};

export default ListCounter;
