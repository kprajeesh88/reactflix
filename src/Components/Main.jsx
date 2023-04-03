import MovieSlider from "./MovieSlider"
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import { popularMovies } from "../Utils/data"

export default function Main(){
    return(
        <main>
            <Wrapper>
                <h2 className="sectionTitle">Popular Movies </h2>
                <div className="gallery">
                    { popularMovies.map(function(movie){
                        return <MovieCard key={movie.id} movie={movie} />
                    })
                    }
                </div>
            </Wrapper>
        </main>
    )
}