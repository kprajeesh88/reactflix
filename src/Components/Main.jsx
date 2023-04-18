import MovieSlider from "./MovieSlider";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useFetch } from "../Hooks/useFetch";

export default function Main() {
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetch("movie/popular", { page });
  const { results, total_pages } = data;

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
              {results.map(function (movie) {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={total_pages}
            />
          </>
        )}
      </Wrapper>
    </main>
  );
}
