import React from 'react';
import useModal from '../hooks/useModal';
import Modal from '@/components/modals/Modal';
import { ModalType } from '@/components/modals/type';

interface ModalContextProps {
  modalType: ModalType | undefined;
  handleModal: (modalType: ModalType) => void;
  visible: boolean;
}

let ModalContext;
const { Provider } = (ModalContext = React.createContext({} as ModalContextProps));

const ModalProvider = ({ children }) => {
  const { visible, handleModal, modalType } = useModal();
  return (
    <Provider value={{ visible, handleModal, modalType }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
