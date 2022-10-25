import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import HomePage from "./HomePage";
import NewsDetailPage from "./NewsDetailPage";
import NewsPage from "./NewsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/" element={<NewsPage />} />
          <Route path="/news/:tahun/:bulan/:tanggal/*" element={<NewsDetailPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:profileId" element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
