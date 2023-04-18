import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useFetch } from "../Hooks/useFetch";
export default function MovieSlider() {
  const [data, loading, error] = useFetch("movie/now_playing", { page: "" });
  const { results } = data;

  let splideOptions = {
    heightRatio: 0.5,
    pagination: false,
    speed: 500,
    cover: true,
    padding: "15vw",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: "0",
      },
    },
  };

  return (
    <div className="movieSlider">
      <Splide options={splideOptions}>
        {results?.map(({ backdrop_path, title, id }) => {
          return (
            <SplideSlide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                alt={title}
              />
              <div className="slideCaption">
                <h2>{title}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
