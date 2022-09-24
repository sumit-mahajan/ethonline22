import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home_page/HomePage";
import LandingPage from "./pages/landing_page/LandingPage";
import PostPage from "./pages/post_page/PostPage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import RegisterPage from "./pages/register_page/RegisterPage";
import TestNewComponent from "./pages/TestNewComponent";

import { ConnectionProvider } from "./utils/connection_service";
import FirstLoad from "./pages/FirstLoad";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ConnectionProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<FirstLoad />} />;
            <Route path="/register" element={<RegisterPage />} />;
            <Route path="/profile/:id" element={<ProfilePage />} />;
            <Route path="/post/:id" element={<PostPage />} />;
            <Route path="/nc" element={<TestNewComponent />} />;
            <Route path="/login" element={<Login />} />;
          </Routes>
        </BrowserRouter>
      </ConnectionProvider>
    </>
  );
}

export default App;
