import { useContext } from "react";
import { AppContext } from "../Contexts/appContext";
import heartFill from "../assets/heart-filled.svg";
import heartLine from "../assets/heart-lined.svg";

export default function FavoriteButton({ movie }) {
  const { state, dispatch } = useContext(AppContext);

  let favorited = state.favorites.some((item) => item.id === movie.id);

  const handleFavorite = () => {
    favorited
      ? dispatch({
          type: "REMOVE_FAVORITE",
          payload: movie.id,
        })
      : dispatch({
          type: "ADD_FAVORITE",
          payload: movie,
        });
  };

  return (
    <div className="favButton" onClick={handleFavorite}>
      {favorited ? (
        <img src={heartFill} alt="" width={24} />
      ) : (
        <img src={heartLine} alt="" width={24} />
      )}
    </div>
  );
}
