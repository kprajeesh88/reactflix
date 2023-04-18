import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState, useEffect} from 'react';
import axios from "axios";
export default function MovieSlider(){

    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        const fetchData = async ()=>{
            let { data } = await axios({
              method: "get",
              url: "https://api.themoviedb.org/3/movie/now_playing",
              params: {
                api_key: "e3ef60114f3455d412ea55db83f798b2",
              },
            });
            setLatestMovies(data.results);
        }

        fetchData();
    },[])

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

    return(
        <div className="movieSlider">
            <Splide options={splideOptions}>
                {
                    latestMovies?.map(({backdrop_path,title })=>{
                        return (<SplideSlide>
                         <img src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} />
                         <div className="slideCaption"><h2>{title}</h2></div>
                        </SplideSlide>)
                    })
                }
            </Splide>
        </div>
    )
}