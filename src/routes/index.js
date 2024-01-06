import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../screens/signup";
import { routes } from "../constants/routes";
import LogIn from "../screens/login";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Feed from "../screens/feed";

const IndexRouter = () => {

    const { user } = useSelector(state => state.userDetails);

    return (
        <BrowserRouter>
            {
                user
                    ?
                    <Routes>
                        <Route path="*" element={<Navigate to={routes.feed} />} />
                        <Route path={routes.feed} element={<Feed />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="*" element={<Navigate to={routes.login} />} />
                        <Route path={routes.login} element={<LogIn />} />
                        <Route path={routes.signup} element={<SignUp />} />
                    </Routes>
            }

            <ToastContainer />
        </BrowserRouter>
    );
}

export default IndexRouter;