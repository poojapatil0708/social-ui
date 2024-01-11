import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { createPost, getFeed, removePost } from "../api/post";
import { toast } from "react-toastify";
import { removeUser } from "../redux/user-reducer";
import { useNavigate } from "react-router-dom";
import SearchBar from "../componants/search";
import { searchUser } from "../api/user";
import Button from "../componants/butten";
import { FaTrashAlt } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Post = ({ item, onDelete }) => {
    return (
        <div>
            <div className="container" style={{ marginBottom: '5px' }}>
                <div>User</div>
                <div>{item.text}</div>
                <div className="delete">
                    <FaTrashAlt onClick={() => onDelete(item)} />
                </div>
            </div>
        </div>
    );
}

const SearchResult = ({ item }) => {
    return (
        <div className="search-result">
            <div>{item.full_name}</div>
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
    const [searchResults, setSearchResults] = useState([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const onSubmit = () => {
        createPost({ text, user: user._id })
            .then(res => {
                setFeed([...feed, res]);
                setModalOpen(false)
                toast.success('Post created successfuly')
            })
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
                setSearchResults(res)
                toast.success(res.message);
            })
            .catch(err => {
                toast.error(err.response?.data?.message || "Error searching friends")
            });
    };

    return (
        <div>
            <div className="feed-container">
                <div>
                    <Button placeholder="Create Post" small onClick={handleOpenModal} label={'Create Post'} />
                    <Modal className="modal-container" isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Example Modal">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                            <h2>Create Post</h2>
                            <IoClose size={'30px'} onClick={handleCloseModal}/>
                        </div>
                        <textarea className="feed-input" onChange={(e) => setText(e.target.value)} value={text} />
                        <Button small onClick={onSubmit} label={'Post'}/>
                    </Modal>
                </div>
                <div>
                    <SearchBar onSearch={handleSearch} onClear={()=>setSearchResults([])} />
                    <div>
                        {
                            searchResults.map((item) => <SearchResult item={item} key={item._id} />)
                        }
                    </div>
                </div>
                <div>
                    <FaPowerOff size={'20px'} onClick={() => {
                        dispatch(removeUser())
                        navigate('/login')
                    }} />
                </div>
            </div>
            <div className="post-container">
                {
                    feed.map((item) => <Post item={item} key={item._id} onDelete={() => onDeletePost(item)} />)
                }
            </div>
        </div>
    );
}

export default Feed;