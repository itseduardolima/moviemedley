import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "./styles"

function Details() {

    const {id} = useParams()

    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500/'


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e3b2efc04743fafec4883272d2080374&language=en-US&page=1`)
        .then(resp => resp.json() )
        .then(data => {

            const {title, overview, release_date, backdrop_path} = data

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${backdrop_path}`,
                releaseDate: release_date
            }

            setMovie(movie)

        } )
    }, [id] )

   


    return (
        <Container>
            <div className="movie">
                
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className="details" >
                <h1>{movie.title}</h1>
                <h2>Sinopse</h2>
                <span>{movie.sinopse}</span>
                <span  className="release-date" >Data de lançamento: {movie.releaseDate}</span>
                <Link to="/"><button>Go back</button></Link>
            </div>
            
        </Container>
    )
}

export default Details