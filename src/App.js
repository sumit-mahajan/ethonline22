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
import ChooseProfilePage from "./pages/choose_profile_page/ChooseProfilePage";

function App() {
  return (
    <>
      <ConnectionProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<FirstLoad />} />;
            <Route path="/home" element={<HomePage />} />;
            <Route path="/register" element={<RegisterPage />} />;
            <Route path="/profile/:id" element={<ProfilePage />} />;
            <Route path="/post/:id" element={<PostPage />} />;
            <Route path="/chooseprofile" element={<ChooseProfilePage />} />;
            <Route path="/nc" element={<TestNewComponent />} />;
          </Routes>
        </BrowserRouter>
      </ConnectionProvider>
    </>
  );
}

export default App;
