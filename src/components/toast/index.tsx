import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import tw from 'twin.macro';
import { ReactNode } from 'react';
import { animated, Transition } from 'react-spring';
import { IcToastCom, IcToastError } from '@/assets/icons';

const flexCenter = tw`
    flex text-center flex-1 justify-center items-center 
`;

const Container = styled.div`
  ${flexCenter};
  box-sizing: border-box;
  position: fixed;
  bottom: 3.125rem;
  left: 0;
  right: 0;
  z-index: 2015;
`;

const ToastList = styled.div`
  box-sizing: border-box;
`;

const ToastBox = styled.div`
  ${tw`bg-gray-90`}
  display: inline-block;
  box-shadow: 0 10px 20px rgba(58, 69, 82, 0.25);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
`;

const ToastMsg = styled.span`
  ${tw`flex text-white`}
  gap: 0.5rem;
  align-items: center;
`;

type ToastOptions = {
  delay: number;
  onClick?: () => void;
  isAlert?: boolean;
};

type ToastMessage = {
  id: string;
  component: ReactNode;
};

const toastList: ToastMessage[] = [];

const renderDOM = () => {
  const container = document.getElementById('toast_container');
  ReactDOM.render(
    <ToastList>
      {toastList.map(({ id, component }) => (
        <Transition
          key={id}
          items={id}
          from={{ opacity: 0, transform: 'translate3d(0, 10px, 0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          leave={{ opacity: 0, transform: 'translate3d(0, 10px, 0)' }}
        >
          {(props) => <animated.div style={props}>{component}</animated.div>}
        </Transition>
      ))}
    </ToastList>,
    container,
  );
};

function toast(message: string, options: ToastOptions): void {
  renderDOM();

  const id = Date.now().toLocaleString();
  toastList.push({
    id,
    component: (
      <ToastBox onClick={options.onClick}>
        <ToastMsg>
          {options.isAlert ? <IcToastError /> : <IcToastCom />}
          {message}
        </ToastMsg>
      </ToastBox>
    ),
  });

  renderDOM();
  setTimeout(() => {
    const index = toastList.findIndex((t) => t.id === id);
    toastList.splice(index, 1);
    renderDOM();
  }, options.delay);
}

export default toast;

export const ToastContainer = () => {
  return <Container id={'toast_container'} />;
};
