import {Container, MovieList, Movie} from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'
    

    useEffect(() => {
        //consummir a api...
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=e3b2efc04743fafec4883272d2080374&language=en-US&page=1')
        .then(resp => resp.json() )
        .then(data => setMovies(data.results))

    }, [] )

    return(
        <Container>
            <h2>Filmes Populares</h2>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id} >
                            <Link  to={`/details/${movie.id}`} ><img src={`${image_path}${movie.poster_path}`}  alt={movie.title} /></Link>
                            
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home