import React from 'react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
  height: 3.25rem;
  border-radius: 10px;
`;

interface ButtonProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  minWidth: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick, minWidth }) => {
  return (
    <ButtonWrapper
      type="button"
      onClick={onClick}
      className={color}
      style={{
        minWidth: minWidth,
      }}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
