import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ModalContext } from '@/contexts/ModalContext';
import usePortal from '@/hooks/usePortal';
import { MODAL_TYPE, ModalType } from '@/components/modals/type';
import FolderModal from '@/components/modals/FolderModal';
import WordModal from '@/components/modals/WordModal';
import tw from 'twin.macro';
import DeleteModal from '@/components/modals/DeleteModal';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2010;
`;

const Layer = styled.div`
  ${tw`bg-white`}
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  //width: 100%;
  //max-width: 30rem;
  transform: translate(-50%, -50%);
  border-radius: 1.25rem;
`;

const ModalFactory = (modalType: ModalType) => {
  switch (modalType) {
    case MODAL_TYPE.FOLDER:
      return <FolderModal />;
    case MODAL_TYPE.WORD:
      return <WordModal />;
    case MODAL_TYPE.DELETE:
      return <DeleteModal />;
    default:
      return null;
  }
};

const Modal = () => {
  const { visible, modalType } = useContext(ModalContext);
  const { Portal } = usePortal();

  return visible ? (
    <Portal>
      <Container>
        <Layer>{ModalFactory(modalType)}</Layer>
      </Container>
    </Portal>
  ) : null;
};

export default Modal;
