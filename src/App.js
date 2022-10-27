import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PopularPage from "./pages/PopularPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/news/" element={<NewsPage/>}/>
          <Route path="/news/:tahun/:bulan/:tanggal/*" element={<NewsDetailPage/>} />
          <Route path="/popular/" element={<PopularPage />} />
          <Route path="/movie/" element={<MoviePage />} />
          <Route path="/*" element={<HomePage />} />
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
