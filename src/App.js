import "./App.css";
import {Layout} from "./components/Layout";
import {Box} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/news/" element={<NewsPage/>}/>
          <Route path="/news/:tahun/:bulan/:tanggal/*" element={<NewsDetailPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/profile/:profileId" element={<ProfilePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
