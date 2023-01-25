import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserPage from "./components/pages/UserPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/users/:userId" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;