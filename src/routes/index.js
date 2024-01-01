import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../screens/signup";
import { routes } from "../constants/routes";

const IndexRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={routes.signup} element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default IndexRouter;