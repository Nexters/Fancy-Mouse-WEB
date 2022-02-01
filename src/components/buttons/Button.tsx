import styled from '@emotion/styled';

const Wrapper = styled.button`
  height: 3.25rem;
`;

const Button = ({ content }) => {
  return <Wrapper>{content}</Wrapper>;
};

export default Button;
