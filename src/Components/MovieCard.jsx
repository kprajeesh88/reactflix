import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function MovieCard({ movie }) {
  const { poster_path, title, vote_average, id } = movie;
  return (
    <div className="movieCard">
      <Link to={`/movie/${id}`}>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />
        </Link>
      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{vote_average}</p>
        </div>
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
}
