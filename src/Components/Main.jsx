import MovieSlider from "./MovieSlider"
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
// import { popularMovies } from "../Utils/data"

export default function Main(){

    const [popMovies, setPopMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [page, setPage] = useState(1)

    useEffect(()=>{
        axios({
            method : "get",
            url : "https://api.themoviedb.org/3/movie/popular",
            params : {
                api_key: "e3ef60114f3455d412ea55db83f798b2",
                page
            }
        }).then(({data}) => {
            setPopMovies(data.results);
            setTotalPages(data.total_pages);
        })
    },[page])
    

    return(
        <main>
            <Wrapper>
                <h2 className="sectionTitle">Popular Movies </h2>
                <div className="gallery">
                    { popMovies.map(function(movie){
                        return <MovieCard key={movie.id} movie={movie} />
                    })
                    }
                </div>
                <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
            </Wrapper>
        </main>
    )
}