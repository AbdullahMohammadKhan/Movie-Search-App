import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchmovie = async (e) => {
    e.preventDefault();
    //console.log("Sumitting");
    //const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=331c72176699afaec1b2ad5e4b0dcd36&language=en-US&query=${query}&page=1&include_adult=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchmovie}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Enter Movie Name"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
