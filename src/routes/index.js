import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../screens/signup";
import { routes } from "../constants/routes";
import LogIn from "../screens/login";
import { ToastContainer } from "react-toastify";

const IndexRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={routes.signup} element={<SignUp/>} />
                <Route path={routes.login} element={<LogIn/>} />
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default IndexRouter;