import { useEffect, useState } from "react";

import Rating from "./Rating";
import Spinner from "./Spinner";

import PropTypes from "prop-types";

import API_KEY from "../env/auth-key";

import styles from "./MovieDetails.module.css";

function MovieDetails({
  queryId,
  onCloseMovieDetails,
  onAddWatchedMovie,
  watched,
}) {
  MovieDetails.propTypes = {
    queryId: PropTypes.string.isRequired,
    onCloseMovieDetails: PropTypes.func.isRequired,
    onAddWatchedMovie: PropTypes.func.isRequired,
    watched: PropTypes.array.isRequired,
  };

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWathched = watched
    .map((movie) => {
      movie.imdbID;
      console.log(movie.imdbID);
    })
    .includes(queryId);
  console.log(isWathched);
  console.log(queryId);

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
      userRating,
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
                IMDB rating <span>⭐️ </span> {imdbRating}
              </p>
            </div>
          </header>

          <section>
            <div className={styles["rating-container"]}>
              {!isWathched ? (
                <>
                  <Rating
                    maxRating={10}
                    color={"#fcc419"}
                    size={23}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className={styles["btn-add"]} onClick={handleAdd}>
                      Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>This movie is not in your list</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>
              <span>Starring:</span> {actors}
            </p>
            <p>
              <span>Directored by:</span> {director}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
