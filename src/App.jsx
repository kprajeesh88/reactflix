import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favorites";
import MovieInfo from "./Pages/MovieInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
