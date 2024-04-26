import { useEffect, useState } from "react";

import Rating from "./Rating";

import PropTypes from "prop-types";

import styles from "./MovieDetails.module.css";

const API_KEY = "f84fc31d";

function MovieDetails({ queryId, onCloseMovieDetails }) {
  MovieDetails.propTypes = {
    queryId: PropTypes.string.isRequired,
    onCloseMovieDetails: PropTypes.func.isRequired,
  };

  const [movieDetails, setMovieDetails] = useState({});

  const {
    Title: title,
    // Year: year,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Director: director,
    Actors: actors,
    Genre: genre,
  } = movieDetails;

  useEffect(
    function () {
      async function fetchMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${queryId}`
        );

        const data = await res.json();
        console.log(data);
        setMovieDetails(data);
      }
      fetchMovieDetails();
    },
    [queryId]
  );

  return (
    <div className={styles.details}>
      <header>
        <button className={styles["btn-back"]} onClick={onCloseMovieDetails}>
          &larr;
        </button>
        <img src={poster} alt={`${title} poster}`} />
        <div className={styles["details-overview"]}>
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span> {imdbRating} IMDB rating
          </p>
        </div>
      </header>

      <section>
        <Rating maxRating={10} color={"#fcc419"} size={24} />
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring: {actors}</p>
        <p>Directored by: {director}</p>
      </section>
    </div>
  );
}

export default MovieDetails;
