import React, { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css";

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = "/discover/movie";
        if (selectedGenre) {
          url += `?with_genres=${selectedGenre}`;
        }
        const data = await get(url);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [selectedGenre]);
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
        <h1 className="title">🎬Peliculas🎬</h1>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Todos</option>
        <option value="28">Acción</option>
        <option value="12">Aventura</option>
        <option value="16">Animacion</option>
        <option value="35">Comedia</option>
        <option value="80">Crimen</option>
        <option value="99">Documental</option>
        <option value="18">Drama</option>
        <option value="10751">Familiar</option>
        <option value="14">Fantasia</option>
        <option value="36">Historico</option>
        <option value="27">Horror</option>
        <option value="10402">Musicial</option>
        <option value="9648">Misterio</option>
        <option value="10749">Romance</option>
        <option value="878">Ciencia ficcion</option>
        <option value="10770">Pelicula de Tv</option>
        <option value="53">Thriller</option>
        <option value="10752">Guerra</option>
        <option value="37">Western</option>
        
      </select>
      <ul className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
