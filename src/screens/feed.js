import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { createPost, getFeed, removePost } from "../api/post";
import { toast } from "react-toastify";
import { removeUser } from "../redux/user-reducer";
import { useNavigate } from "react-router-dom";
import SearchBar from "../componants/search";
import { searchUser } from "../api/user";

const Post = ({ item, onDelete }) => {
    return (
        <div>
            <div className="container" style={{ marginBottom: '5px' }}>
                <div>User</div>
                <div>{item.text}</div>
                <button onClick={() => onDelete(item)} >Delete</button>
            </div>
        </div>
    );
}

const Feed = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const { user } = useSelector(state => state.userDetails);
    const [text, setText] = useState('');
    const [feed, setFeed] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [searchResults, setSearchResults] = useState([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const onSubmit = () => {
        createPost({ text, user: user._id })
            .then(() => toast.success('Post created successfuly'))
            .catch(err => toast.error(err.response?.data?.message || 'Error creating post'))
    }

    useEffect(() => {
        getFeed(user._id)
            .then(res => {
                setFeed(res)
            })
            .catch(err => {
                toast.error(err.response?.data?.message || 'Error to get post')
            })
        // eslint-disable-next-line 
    }, [])

    const onDeletePost = (postToDelete) => {
        setFeed(feed.filter((item) => item._id !== postToDelete._id));
        removePost(postToDelete._id, user)
            .then(res => {
                toast.success(res.message)
            })
            .catch(err => {
                toast.error(err.response?.data?.message || "Error deleting post")
            });
    }

    const handleSearch = (fullName) => {
        searchUser(fullName)
            .then(res => {
                toast.success(res.message);
            })
            .catch(err => {
                toast.error(err.response?.data?.message || "Error searching friends")
            });
    };

    return (
        <div>
            <div className="div-container">
                <SearchBar onSearch={handleSearch} />
                <button onClick={() => {
                    dispatch(removeUser())
                    navigate('/login')
                }}>LogOut</button>
            </div>
            <button className="create-post-button" placeholder="Create Post" onClick={handleOpenModal}>Create Post</button>
            <Modal className="modal-container"
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Example Modal">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <h2>Create Post</h2>
                    <button onClick={handleCloseModal}>Close Modal</button>
                </div>
                <textarea className="feed-input" onChange={(e) => setText(e.target.value)} value={text} />
                <button onClick={onSubmit}>Post</button>
            </Modal>
            <div className="post-container">
                {
                    feed.map((item) => <Post item={item} key={item._id} onDelete={() => onDeletePost(item)} />)
                }
            </div>

        </div>
    );
}

export default Feed;