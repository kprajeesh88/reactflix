import React from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import { useFetch } from "../Hooks/useFetch";

export default function MovieInfo() {
  let { id } = useParams();

  const [data] = useFetch(`movie/${id}`);
  const backdrop = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
  };

  return (
    <div className="moviePage" style={backdrop}>
      <Wrapper>
        <div className="movieContent">
          <div className="moviePoster">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt=""
            />
          </div>
          <div className="movieInfo">
            <div className="movieTitle">
              <h1>{data?.title}</h1>
              <h3>{data?.tagline}</h3>
            </div>

            <div className="moviePlot">{data?.overview}</div>

            <div className="movieDetails">
              <div className="movieDetailsItem">
                <h3>Language</h3>
                <div>
                  {data?.spoken_languages?.map((lang) => {
                    return (
                      <span key={lang.iso_639_1}> {lang.english_name} </span>
                    );
                  })}
                </div>
              </div>

              <div className="movieDetailsItem">
                <h3>Genre</h3>
                <div>
                  {data?.genres?.map((genre) => {
                    return <span key={genre.id}> {genre.name} </span>;
                  })}
                </div>
              </div>

              <div className="movieDetailsItem">
                <h3>Runtime</h3>
                <div>{data?.runtime} Minutes </div>
              </div>

              <div className="movieDetailsItem">
                <h3>Rating</h3>
                <div>{data?.vote_average} </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
