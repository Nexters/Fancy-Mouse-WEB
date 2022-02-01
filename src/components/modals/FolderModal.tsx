import React from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import { MODAL_TYPE } from '@/components/modals/type';

const FolderModal = () => {
  const { handleModal } = React.useContext(ModalContext);
  return (
    <div className="bg-white relative p-5 shadow-lg rounded flex flex-col items-start text-lg text-gray-800">
      <p>Folder Modal</p>
    </div>
  );
};

export default FolderModal;
