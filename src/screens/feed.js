import { useState } from "react";
import Button from "../componants/butten";
import Modal from 'react-modal';
// import { useSelector } from "react-redux";

const Feed = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    // const {user} = useSelector(state => state.userDetails);
    // const [text, setText] = useState('');

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Button label="Create Post" onClick={handleOpenModal} />
            <Modal className="modal-container"
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Example Modal">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <h2>Create Post</h2>
                    <button onClick={handleCloseModal}>Close Modal</button>
                </div>
                <textarea className="feed-input"/>
                <button>Post</button>
            </Modal>
        </div>
    );
}

export default Feed;