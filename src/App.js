import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home_page/HomePage";
import LandingPage from "./pages/landing_page/LandingPage";
import PostPage from "./pages/post_page/PostPage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import RegisterPage from "./pages/register_page/RegisterPage";
import TestNewComponent from "./pages/TestNewComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />;
          <Route path="/register" element={<RegisterPage />} />;
          <Route path="/home" element={<HomePage />} />;
          <Route path="/profile/:id" element={<ProfilePage />} />;
          <Route path="/post/:id" element={<PostPage />} />;
          <Route path="/nc" element={<TestNewComponent />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
