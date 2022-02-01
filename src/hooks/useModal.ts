import { useState } from 'react';
import { MODAL_TYPE, ModalType } from '@/components/modals/type';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType | undefined>(MODAL_TYPE.WORD);

  const handleModal = (type?: ModalType) => {
    setVisible(!visible);
    setModalType(type);
  };

  return { visible, handleModal, modalType };
};

export default useModal;
