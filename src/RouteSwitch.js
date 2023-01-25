import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserPage from "./components/pages/UserPage";
import PostPage from "./components/pages/PostPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/users/:userId" element={<UserPage />} />
                <Route path="/posts/:postId" element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;