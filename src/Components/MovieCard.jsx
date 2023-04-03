export default function MovieCard({ movie }) {
  const { poster_path, title, rating } = movie;
  return (
    <div className="movieCard">
      <img className="moviePoster" src={poster_path} alt="" />
      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{title}</h2>
          <p className="movieCardRating">{rating}</p>
        </div>
        <div className="favButton">#</div>
      </div>
    </div>
  );
}
