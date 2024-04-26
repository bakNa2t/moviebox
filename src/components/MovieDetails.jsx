import { useEffect, useState } from "react";

import Rating from "./Rating";

import PropTypes from "prop-types";

import styles from "./MovieDetails.module.css";
import Spinner from "./Spinner";

const API_KEY = "f84fc31d";

function MovieDetails({ queryId, onCloseMovieDetails, onAddWatchedMovie }) {
  MovieDetails.propTypes = {
    queryId: PropTypes.string.isRequired,
    onCloseMovieDetails: PropTypes.func.isRequired,
    onAddWatchedMovie: PropTypes.func.isRequired,
  };

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [/*userRating,*/ setUserRating] = useState(0);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Director: director,
    Actors: actors,
    Genre: genre,
  } = movieDetails;

  function handleAdd() {
    const newMovie = {
      imdbID: queryId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };

    onAddWatchedMovie(newMovie);
    onCloseMovieDetails();
  }

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${queryId}`
        );

        const data = await res.json();
        setMovieDetails(data);

        setIsLoading(false);
      }
      fetchMovieDetails();
    },
    [queryId]
  );

  return (
    <div className={styles.details}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <button
              className={styles["btn-back"]}
              onClick={onCloseMovieDetails}
            >
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
            <div className={styles["rating-container"]}>
              <Rating
                maxRating={10}
                color={"#fcc419"}
                size={24}
                onSetRating={setUserRating}
              />
              <button className={styles["btn-add"]} onClick={handleAdd}>
                Add to List
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directored by: {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
