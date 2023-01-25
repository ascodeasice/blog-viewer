import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserPage from "./components/pages/UserPage";
import PostPage from "./components/pages/PostPage";
import CreateCommentPage from "./components/pages/CreateCommentPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/users/:userId" element={<UserPage />} />
                <Route path="/posts/:postId" element={<PostPage />} />
                <Route path="/posts/:postId/comments" element={<CreateCommentPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;