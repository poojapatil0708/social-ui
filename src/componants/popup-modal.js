import { useState } from 'react';
import Modal from 'react-modal';

const PopupModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    return (
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
  
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Example Modal"
        >
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
}

export default PopupModal;