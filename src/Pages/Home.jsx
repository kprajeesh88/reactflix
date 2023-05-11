import MovieSlider from "../Components/MovieSlider";
import Wrapper from "../Components/Wrapper";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import { useContext, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { AppContext } from "../Contexts/appContext";

const Home = () => {
  // const [page, setPage] = useState(1);
  const {state:{page}} = useContext(AppContext);
  const [data, loading, error] = useFetch("movie/popular", { page });
  const { results, total_pages } = data;

  return (
    <>
      <MovieSlider></MovieSlider>
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies </h2>
            <div className="gallery">
              {results.map(function (movie) {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination
              page={page}
              
              totalPages={total_pages}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
