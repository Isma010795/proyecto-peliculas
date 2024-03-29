import "../components/MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({movie}){
    const imagenUrl="https://image.tmdb.org/t/p/w500"+movie.poster_path;

    return(<li className="movieCard">
        <Link to={"./moviesdetails/"+movie.id}>
        <img width={250}
        height={350}
        src={imagenUrl}
        alt={movie.genres}
        className="movieImage"/>
      
        <div>
            {movie.title}
            {movie.genres}
            
        </div>
        </Link>
    </li>)
}