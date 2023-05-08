import Wrapper from "../Components/Wrapper";
import { useContext } from "react";
import { AppContext } from "../Contexts/appContext";
import MovieCard from "../Components/MovieCard";
export default function Favorites() {
  const { state } = useContext(AppContext);
  return (
    <Wrapper>
      <div className="gallery">
        {state.favorites.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </Wrapper>
  );
}
