import MovieSlider from "./MovieSlider";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
// import { popularMovies } from "../Utils/data"

export default function Main() {
  const [popMovies, setPopMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios({
          method: "get",
          url: "https://api.themoviedb.org/3/movie/popular",
          params: {
            api_key: "e3ef60114f3455d412ea55db83f798b2",
            page,
          },
        });
        setPopMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <main>
        <MovieSlider></MovieSlider>
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies </h2>
            <div className="gallery">
              {popMovies.map(function (movie) {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}

        
      </Wrapper>
    </main>
  );
}
