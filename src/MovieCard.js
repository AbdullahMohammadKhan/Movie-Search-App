import React from "react";

export default function MovieCard({ movie }) {
  //const { movie } = props;
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h1 className="card--title">{movie.title}</h1>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>

        <p>
          <small>
            PARENTAL GUIDENCE:
            <small style={movie.adult ? { color: "red" } : {}}>
              {movie.adult ? "Yes" : "No"}
            </small>
          </small>
        </p>
        <p>
          <small>Language: {movie.original_language}</small>
        </p>
        <p>
          <small>POPULARITY RATING: {movie.popularity}</small>
        </p>
        <p>
          <small>VOTE AVERAGE: {movie.vote_average}</small>
        </p>
        <p>
          <small>VOTE COUNT: {movie.vote_count}</small>
        </p>
        <h1>Movie Description</h1>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}

/*


adult: false
backdrop_path: "/rZv6ApEq6VU4gY3V2yJbgfRuTHr.jpg"
genre_ids: (2) [35, 10749]
id: 15184
original_language: "en"
original_title: "A Good Woman"
overview: "Fleeing 1930s New York and leaving behind a chequered past, the giltzy divorcee Mrs Stella Erlynne travels to Italy's sun-dappled Amalfi coast. Mrs Erlynne's appearance causes a stir amongst the visiting aristocracy. Based on the Oscar Wilde play Lady Windemere's Fan"
popularity: 7.639
poster_path: "/kxWy4ffQk1FyOdo6OX7yrAJRYbm.jpg"
release_date: "2004-09-15"
title: "A Good Woman"
video: false
vote_average: 6
vote_count: 82
*/
