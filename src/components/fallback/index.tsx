import styled from '@emotion/styled';
import tw from 'twin.macro';
import { EmptyFill } from '@/assets/icons';

interface Props {
  isWord: boolean;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: calc(100vh - 21rem);
  align-items: center;
  justify-content: center;
`;
const FallbackText = styled.p`
  ${tw`font-bold`}
  color: #A1ABB5;
  font-size: 1.5rem;
  line-height: 1.875rem;
`;

const FallbackImg = styled.div`
  margin-bottom: 1rem;
`;

const Fallback = ({ isWord }: Props) => {
  return (
    <Wrapper>
      <FallbackImg>
        <EmptyFill />
      </FallbackImg>
      {isWord ? <FallbackText>저장된 단어가 없어요.</FallbackText> : <FallbackText>저장된 폴더가 없어요.</FallbackText>}
    </Wrapper>
  );
};

export default Fallback;
