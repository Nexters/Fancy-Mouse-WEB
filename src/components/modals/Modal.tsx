import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ModalContext } from '@/contexts/ModalContext';
import usePortal from '@/hooks/usePortal';
import { MODAL_TYPE, ModalType } from '@/components/modals/type';
import FolderModal from '@/components/modals/FolderModal';
import WordModal from '@/components/modals/WordModal';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2010;
`;

const Layer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 26px rgba(34, 33, 31, 0.08);
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 300px;
  transform: translate(-50%, -50%);
`;

const ModalFactory = (modalType: ModalType) => {
  switch (modalType) {
    case MODAL_TYPE.FOLDER:
      return <FolderModal />;
    case MODAL_TYPE.WORD:
      return <WordModal />;
    default:
      return null;
  }
};

const Modal = () => {
  const { handleModal, visible, modalType } = useContext(ModalContext);
  const { Portal } = usePortal();

  const handleOutsideClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleModal();
  };

  return visible ? (
    <Portal>
      <Container onClick={handleOutsideClick}>
        <Layer>{ModalFactory(modalType)}</Layer>
      </Container>
    </Portal>
  ) : null;
};

export default Modal;
